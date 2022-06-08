import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage, Label } from 'formik';
import AuthenticationService from './AuthentificationService';
import EmployeeDataService from '../api/EmployeeDataService';
import moment from 'moment';

class AddEmployee extends Component {
    constructor(props){
        super(props)
        this.state = {
            id: this.props.match.params.id,
			firstName: '',
            lastName: '',
            employmentDate: '',
            identityCardValidity: '',
            driverLicenseValidity: '',
            driverCardValidity: '',
            driverQualificationCardValidity: '',
            psychologicalOpinionValidity: '',
            medicalOpinionValidity: '',
            skillsSheetsValidity: '',
            username: '',
            password: ''
        }
		this.onSubmit = this.onSubmit.bind(this)
		this.validate = this.validate.bind(this)
    }

    componentDidMount() {
        if (this.state.id == -1) {
            console.log("id: " + this.state.id)
            return
        }

        let username = AuthenticationService.getLoggedInUserName()

        EmployeeDataService.retrieveEmployee(username, this.state.id)
            .then(response => this.setState({
                firstName: response.data.firstName,
                lastName: response.data.lastName,
                employmentDate: moment(response.data.employmentDate).format('YYYY-MM-DD'),
                identityCardValidity: moment(response.data.identityCardValidity).format('YYYY-MM-DD'),
                driverLicenseValidity: moment(response.data.driverLicenseValidity).format('YYYY-MM-DD'),
                driverCardValidity: moment(response.data.driverCardValidity).format('YYYY-MM-DD'),
                driverQualificationCardValidity: moment(response.data.driverQualificationCardValidity).format('YYYY-MM-DD'),
                psychologicalOpinionValidity: moment(response.data.psychologicalOpinionValidity).format('YYYY-MM-DD'),
                medicalOpinionValidity: moment(response.data.medicalOpinionValidity).format('YYYY-MM-DD'),
                skillsSheetsValidity: moment(response.data.skillsSheetsValidity).format('YYYY-MM-DD'),
                username: response.data.username,
                password: response.data.password
            }))
    }

	validate(values) {
        let errors = {}
        if (!values.firstName) {
            errors.description = 'Enter a Identification Number'
        }

		//TO DO implement validation for every field
        return errors

    }

	onSubmit(values){
        let username = AuthenticationService.getLoggedInUserName()

		console.log(values);
		let employee = {
            id: this.state.id,
			firstName: values.firstName,
            lastName: values.lastName,
            employmentDate: values.employmentDate,
            identityCardValidity: values.identityCardValidity,
            driverLicenseValidity: values.driverLicenseValidity,
            driverCardValidity: values.driverCardValidity,
            driverQualificationCardValidity: values.driverQualificationCardValidity,
            psychologicalOpinionValidity: values.psychologicalOpinionValidity,
            medicalOpinionValidity: values.medicalOpinionValidity,
            skillsSheetsValidity: values.skillsSheetsValidity,
            username: values.username,
            password: values.password
        }
		console.log(employee)
        if (this.state.id == -1) {
            EmployeeDataService.createEmployee(username, employee)
                .then(() => this.props.history.push('/employees'))
        } else {
            EmployeeDataService.updateEmployee(username, this.state.id, employee)
                .then(() => this.props.history.push('/employees'))
        }
		
	}
    
    render(){
		const inputStyle = {
			margin: "10px"
		}
        let { firstName, lastName, employmentDate, identityCardValidity, driverLicenseValidity, driverCardValidity, driverQualificationCardValidity, psychologicalOpinionValidity, medicalOpinionValidity, skillsSheetsValidity, username,  password } = this.state

        return(
            <div className="container">
			<h1 className="large" style={{color: '#206a5d'}}>Employee Information</h1>

			<Formik 
					initialValues={{ firstName, lastName, employmentDate, identityCardValidity, driverLicenseValidity, driverCardValidity, driverQualificationCardValidity, psychologicalOpinionValidity, medicalOpinionValidity, skillsSheetsValidity, username,  password}}
					onSubmit={this.onSubmit}
					validateOnBlur={false}
					validate={this.validate}
					enableReinitialize={true}
				>
					{
						(props) => (
							<Form>
								<ErrorMessage name="companyName" component="div"
									className="alert alert-warning" />
								<fieldset className="form-group" style={inputStyle}>
                                    <label>First Name</label>
									<Field className="form-control" type="text" name="firstName"/>
								</fieldset>
								<fieldset className="form-group" style={inputStyle}>
                                    <label>Last Name</label>
									<Field className="form-control" type="text" name="lastName" />
								</fieldset>
								<fieldset className="form-group" style={inputStyle}>
                                    <label>Employment Date</label>
									<Field className="form-control" type="date" name="employmentDate"/>
								</fieldset>
								<fieldset className="form-group" style={inputStyle}>
                                    <label>Identity Card Validity</label>
									<Field className="form-control" type="date" name="identityCardValidity"/>
								</fieldset>
								<fieldset className="form-group" style={inputStyle}>
                                    <label> Driver License Validity </label>
									<Field className="form-control" type="date" name="driverLicenseValidity"/>
								</fieldset>
								<fieldset className="form-group" style={inputStyle}>
                                    <label> Driver Card Validity </label>
									<Field className="form-control" type="date" name="driverCardValidity"/>
								</fieldset>
                                <fieldset className="form-group" style={inputStyle}>
                                    <label> Driver Qualification Card Validity </label>
									<Field className="form-control" type="date" name="driverQualificationCardValidity"/>
								</fieldset>
                                <fieldset className="form-group" style={inputStyle}>
                                    <label> Psychological Opinion Validity </label>
									<Field className="form-control" type="date" name="psychologicalOpinionValidity"/>
								</fieldset>
                                <fieldset className="form-group" style={inputStyle}>
                                    <label> Medical Opinion Validity </label>
									<Field className="form-control" type="date" name="medicalOpinionValidity"/>
								</fieldset>
                                <fieldset className="form-group" style={inputStyle}>
                                    <label> Skills Sheets Validity </label>
									<Field className="form-control" type="date" name="skillsSheetsValidity"/>
								</fieldset>
                                <fieldset className="form-group" style={inputStyle}>
                                    <label> Username </label>
									<Field className="form-control" type="text" name="username"/>
								</fieldset>
                                <fieldset className="form-group" style={inputStyle}>
                                    <label> Password </label>
									<Field className="form-control" type="text" name="password"/>
								</fieldset>
								<button className="btn btn-primary" type="submit">Save</button>
							</Form>
						)
					}
				</Formik>
		</div>
        )
    }

    
}
 
export default AddEmployee;