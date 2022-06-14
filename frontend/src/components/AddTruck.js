import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage, Label } from 'formik';
import AuthenticationService, { TOKEN } from '../AuthentificationService';
import TruckDataService from '../api/TruckDataService'
import moment from 'moment';


class AddTruck extends Component {
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
            vignetteValidity: '',
            licenseValidity: '',
            tachographValidity: '',
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

        TruckDataService.retrieveTruck(username, this.state.id, token)
            .then(response => this.setState({
                uniqueIdentificationNumber: response.data.uniqueIdentificationNumber,
                registrationNumber: response.data.registrationNumber,
                brand: response.data.brand,
                fabricationYear: response.data.fabricationYear,
                itpValidity: moment(response.data.itpValidity).format('YYYY-MM-DD'),
                rcaInsuranceValidity: moment(response.data.rcaInsuranceValidity).format('YYYY-MM-DD'),
                vignetteValidity: moment(response.data.vignetteValidity).format('YYYY-MM-DD'),
                licenseValidity: moment(response.data.licenseValidity).format('YYYY-MM-DD'),
                tachographValidity: moment(response.data.tachographValidity).format('YYYY-MM-DD')
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
		let truck = {
            id: this.state.id,
			uniqueIdentificationNumber: values.uniqueIdentificationNumber,
            registrationNumber: values.registrationNumber,
            brand: values.brand,
            fabricationYear: values.fabricationYear,
            itpValidity: values.itpValidity,
            rcaInsuranceValidity: values.rcaInsuranceValidity,
            vignetteValidity: values.vignetteValidity,
            licenseValidity: values.licenseValidity,
            tachographValidity: values.tachographValidity
        }
		console.log(truck)
        if (this.state.id == -1) {
            TruckDataService.createTruck(username, truck, token)
                .then(() => this.props.history.push('/trucks'))
        } else {
            TruckDataService.updateTruck(username, this.state.id, truck, token)
                .then(() => this.props.history.push('/trucks'))
        }
		
	}
    
    render(){
		const inputStyle = {
			margin: "10px"
		}
        let {uniqueIdentificationNumber, registrationNumber, brand, fabricationYear, itpValidity, rcaInsuranceValidity, vignetteValidity, licenseValidity, tachographValidity } = this.state

        return(
            <div className="container">
			<h1 className="large" style={{color: '#206a5d'}}>Truck Information</h1>

<Formik 
    initialValues={{ uniqueIdentificationNumber, registrationNumber, brand, fabricationYear, itpValidity, rcaInsuranceValidity, vignetteValidity, licenseValidity, tachographValidity}}
    onSubmit={this.onSubmit}
    validateOnBlur={false}
    validate={this.validate}
    enableReinitialize={true}
>
    {
        (props) => (
            <Form>
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
                    <label> Vignette Validity </label>
                    <Field className="form-control" type="date" name="vignetteValidity"/>
                </fieldset>
                <fieldset className="form-group" style={inputStyle}>
                    <label> License Validity </label>
                    <Field className="form-control" type="date" name="licenseValidity"/>
                </fieldset>
                <fieldset className="form-group" style={inputStyle}>
                    <label> Tachograph Validity </label>
                    <Field className="form-control" type="date" name="tachographValidity"/>
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
 
export default AddTruck;