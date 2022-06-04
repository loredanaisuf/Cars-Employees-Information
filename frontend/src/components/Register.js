import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';

class Register extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
		    email: '',
		    password: '',
		    confirmationPassword: '',
        }
    }
    
    render(){
        return(
            <div className="container">
			<h1 className="large" style={{color: '#206a5d'}}>Sign Up</h1>
			<p className="lead">
				<FaUserAlt /> Create your account
			</p>
			<form className="form">
				<div className="form-group">
					<input
						type="text"
						placeholder="Name"
						name="name"
						value={this.state.name}
						required
					/>
				</div>
				<div className="form-group">
					<input
						type="email"
						placeholder="Email Address"
						name="email"
						value={this.state.email}
						required
					/>
				</div>
				<div className="form-group">
					<input
						type="password"
						placeholder="Password"
						name="password"
						value={this.state.password}
						minLength="6"
						autocomplete="on"
					/>
				</div>
				<div className="form-group">
					<input
						type="password"
						placeholder="Confirm Password"
						name="confirmationPassword"
						value={this.state.confirmationPassword}
						minLength="6"
						autocomplete="on"
					/>
				</div>
				<input type="submit" className="btn btn-primary" value="Register" />
			</form>
			<p className="my-1">
				Already have an account? <Link to="/login" style={{color: '#206a5d'}}>Sign In</Link>
			</p>
		</div>
        )
    }

    
}
 
export default Register;