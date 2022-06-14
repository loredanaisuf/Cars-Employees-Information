import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage, Label } from 'formik';
import AuthenticationService, { TOKEN } from '../AuthentificationService';
import TrailDataService from '../api/TrailDataService';
import moment from 'moment'

class AddTrail extends Component {
    constructor(props){
        super(props)
        this.state = {
            id: this.props.match.params.id,
			uniqueIdentificationNumber: '',
            registrationNumber: '',
            brand: '',
            fabricationYear: '',
            itpValidity: '',
            rcaInsuranceValidity: '',
            cmrInsuranceValidity: ''
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
        let token = localStorage.getItem(TOKEN)

        TrailDataService.retrieveTrail(username, this.state.id, token)
            .then(response => this.setState({
                uniqueIdentificationNumber: response.data.uniqueIdentificationNumber,
                registrationNumber: response.data.registrationNumber,
                brand: response.data.brand,
                fabricationYear: response.data.fabricationYear,
                itpValidity: moment(response.data.itpValidity).format('YYYY-MM-DD'),
                rcaInsuranceValidity: moment(response.data.rcaInsuranceValidity).format('YYYY-MM-DD'),
                cmrInsuranceValidity: moment(response.data.cmrInsuranceValidity).format('YYYY-MM-DD')
            }))
    }

	validate(values) {
        let errors = {}
        if (!values.uniqueIdentificationNumber) {
            errors.description = 'Enter a Identification Number'
        }

		//TO DO implement validation for every field
        return errors

    }

	onSubmit(values){
        let username = AuthenticationService.getLoggedInUserName()
        let token = localStorage.getItem(TOKEN)

		console.log(values);
		let trail = {
            id: this.state.id,
			uniqueIdentificationNumber: values.uniqueIdentificationNumber,
            registrationNumber: values.registrationNumber,
            brand: values.brand,
            fabricationYear: values.fabricationYear,
            itpValidity: values.itpValidity,
            rcaInsuranceValidity: values.rcaInsuranceValidity,
            cmrInsuranceValidity: values.cmrInsuranceValidity
        }
		console.log(trail)
        if (this.state.id == -1) {
            TrailDataService.createTrail(username, trail, token)
                .then(() => this.props.history.push('/trails'))
        } else {
            TrailDataService.updateTrail(username, this.state.id, trail, token)
                .then(() => this.props.history.push('/trails'))
        }
		
	}
    
    render(){
		const inputStyle = {
			margin: "10px"
		}
        let {uniqueIdentificationNumber, registrationNumber, brand, fabricationYear, itpValidity, rcaInsuranceValidity, cmrInsuranceValidity } = this.state

        return(
            <div className="container">
			<h1 className="large" style={{color: '#206a5d'}}>Trail Information</h1>

			<Formik 
					initialValues={{ uniqueIdentificationNumber, registrationNumber, brand, fabricationYear, itpValidity, rcaInsuranceValidity, cmrInsuranceValidity}}
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
                                    <label>Unique Identification Number</label>
									<Field className="form-control" type="text" name="uniqueIdentificationNumber"/>
								</fieldset>
								<fieldset className="form-group" style={inputStyle}>
                                    <label>Registration Number</label>
									<Field className="form-control" type="text" name="registrationNumber" />
								</fieldset>
								<fieldset className="form-group" style={inputStyle}>
                                    <label>Brand</label>
									<Field className="form-control" type="text" name="brand"/>
								</fieldset>
								<fieldset className="form-group" style={inputStyle}>
                                    <label>Fabrication Year</label>
									<Field className="form-control" type="number" name="fabricationYear"/>
								</fieldset>
								<fieldset className="form-group" style={inputStyle}>
                                    <label> ITP Validity </label>
									<Field className="form-control" type="date" name="itpValidity"/>
								</fieldset>
								<fieldset className="form-group" style={inputStyle}>
                                    <label> RCA Insurance Validity </label>
									<Field className="form-control" type="date" name="rcaInsuranceValidity"/>
								</fieldset>
                                <fieldset className="form-group" style={inputStyle}>
                                    <label> CMR Insurance Validity </label> 
									<Field className="form-control" type="date" name="cmrInsuranceValidity"/>
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
 
export default AddTrail;