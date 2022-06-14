import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import RegistrationService from '../api/RegistrationService';
import AuthentificationService from '../AuthentificationService';

class RegisterUser extends Component {
    constructor(props){
        super(props)
        this.state = {
			companyName: '',
            firstName: '',
			lastName: '',
		    username: '',
		    password: '',
		    confirmationPassword: '',
        }
		this.onSubmit = this.onSubmit.bind(this)
		this.validate = this.validate.bind(this)
    }

	validate(values) {
        let errors = {}
        if (!values.companyName) {
            errors.description = 'Enter a Company Name'
        } else if (values.companyName.length < 5) {
            errors.companyName = 'Enter atleast 5 Characters in Description'
        }

		//TO DO implement validation for every field
        return errors

    }

	onSubmit(values){
		console.log(values);
		let companyName = values.companyName
		let user = {
            firstName: values.firstName,
			lastName: values.lastName,
			username: values.username,
            password: values.password
        }
		console.log(user)
		RegistrationService.registerUser(user, companyName)
			.then (
				AuthentificationService.registerSuccessfulLogIn(user.username, user.password),
				this.props.history.push("/cars")
			)
		
	}
    
    render(){
		const inputStyle = {
			margin: "10px"
		}

		let { companyName, firstName, lastName, username, password,  confirmationPassword } = this.state

        return(
            <div className="container">
			<h1 className="large" style={{color: '#206a5d'}}>Sign Up</h1>
			<p className="lead">
				<FaUserAlt /> Create your account only if the company you work for is already registered
			</p>
			<Formik 
					initialValues={{ companyName, firstName, lastName, username, password,  confirmationPassword}}
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
								<ErrorMessage name="targetDate" component="div"
									className="alert alert-warning" />
								<fieldset className="form-group" style={inputStyle}>
									<Field className="form-control" type="text" name="companyName" placeholder="Company Name"/>
								</fieldset>
								<fieldset className="form-group" style={inputStyle}>
									<Field className="form-control" type="text" name="firstName" placeholder="First Name" />
								</fieldset>
								<fieldset className="form-group" style={inputStyle}>
									<Field className="form-control" type="text" name="lastName" placeholder="Last Name" />
								</fieldset>
								<fieldset className="form-group" style={inputStyle}>
									<Field className="form-control" type="text" name="username" placeholder="Username" />
								</fieldset>
								<fieldset className="form-group" style={inputStyle}>
									<Field className="form-control" type="password" name="password" placeholder="Password"/>
								</fieldset>
								<fieldset className="form-group" style={inputStyle}>
									<Field className="form-control" type="password" name="confirmationPassword" placeholder="Confirmation Password" />
								</fieldset>
								<button className="btn btn-primary" type="submit">Register</button>
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
 
export default RegisterUser;