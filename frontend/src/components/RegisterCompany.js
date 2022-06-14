import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import RegistrationService from '../api/RegistrationService';
import AuthentificationService from '../AuthentificationService';


class Register extends Component {
    constructor(props){
        super(props)
        this.state = {
			companyName: '',
            managerName: '',
			registrationCode: '',
		    username: '',
		    password: '',
		    confirmationPassword: '',
        }
		this.onSubmit = this.onSubmit.bind(this)
		this.validate = this.validate.bind(this)
		this.validateUsername = this.validateUsername.bind(this)
    }

	validate(values) {
        let errors = {}
        if (!values.username) {
            errors.username = 'Enter a username'
        } 
		if (values.password.length < 12) {
            errors.password = 'Enter a strong password with at least 12 characters'
        }
	
		if(values.password !== values.confirmationPassword){
			errors.confirmationPassword = 'Passwords do not match'
		}	

        return errors
    }

	validateUsername(username){
		RegistrationService.verifyUsername(username)
			.then(console.log("Username exist"))
			.catch(console.log("Ok"))
	}

	onSubmit(values){
		console.log(values);
		let company = {
            companyName: values.companyName,
            managerName: values.managerName,
            registrationCode: values.registrationCode,
			username: values.username,
            password: values.password
        }
		console.log(company)
		RegistrationService.registerCompany(company)
			.then (
				AuthentificationService.registerSuccessfulLogIn(company.username, company.password),
				this.props.history.push("/employees")
			)
		
	}
    
    render(){
		const inputStyle = {
			margin: "10px"
		}

		let { companyName, managerName, registrationCode, username, password,  confirmationPassword } = this.state

        return(
            <div className="container">
			<h1 className="large" style={{color: '#206a5d'}}>Sign Up</h1>
			<p className="lead">
				<FaUserAlt /> Create your account
			</p>
			
				<Formik 
					initialValues={{ companyName, managerName, registrationCode, username, password,  confirmationPassword}}
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
									<Field className="form-control" type="text" name="companyName" placeholder="Company Name"/>
								</fieldset>
								<fieldset className="form-group" style={inputStyle}>
									<Field className="form-control" type="text" name="managerName" placeholder="Manager Name" />
								</fieldset>
								<fieldset className="form-group" style={inputStyle}>
									<Field className="form-control" type="text" name="registrationCode" placeholder="Registration Code"/>
								</fieldset>
								<ErrorMessage name="username" component="div"
									className="alert alert-warning" />
								<fieldset className="form-group" style={inputStyle}>
									<Field className="form-control" type="text" name="username" placeholder="Username"/>
								</fieldset>
								<ErrorMessage name="password" component="div"
									className="alert alert-warning" />
								<fieldset className="form-group" style={inputStyle}>
									<Field className="form-control" type="password" name="password" placeholder="Password"/>
								</fieldset>
								<ErrorMessage name="confirmationPassword" component="div"
									className="alert alert-warning" />
								<fieldset className="form-group" style={inputStyle}>
									<Field className="form-control" type="password" name="confirmationPassword" placeholder="Confirmation Password" />
								</fieldset>
								<button className="btn btn-primary" type="submit">Save</button>
							</Form>
						)
					}
				</Formik>

            
			<p className="my-1">
				Already have an account? <Link to="/login" style={{color: '#206a5d'}}>Sign In</Link>
			</p>
		</div>
        )
    }

    
}
 
export default Register;