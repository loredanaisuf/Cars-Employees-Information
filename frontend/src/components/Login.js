import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';
import { Container } from 'react-bootstrap';
import AuthentificationService from '../AuthentificationService';

class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
		    username: '',
		    password: '',
			successLogIn: false,
			failedLogIn: false,
        }

		this.handlerChange = this.handlerChange.bind(this);
		this.login = this.login.bind(this);
    }

	handlerChange(event){
		console.log(event.target.name + ": " + event.target.value);
		this.setState({ [event.target.name] : event.target.value });
	}

	login(){
		// console.log(this.state.username + " : " + this.state.password);
		// if(this.state.username === 'lori' && this.state.password === 'lori'){
		// 	//this.props.history.push(`/employees/${this.state.username}`);
		// 	AuthentificationService.registerSuccessfulLogIn(this.state.username, this.state.password);
		// 	this.props.history.push("/cars");
		// 	console.log("Succesfull");
		// 	this.setState({successLogIn : true})
		// 	this.setState({failedLogIn : false})
		// } else {
		// 	console.log("Failed");
		// 	this.setState({successLogIn : false})
		// 	this.setState({failedLogIn : true})
		// }
		console.log("start log in")
		AuthentificationService
		.executeJwtAuthenticationService(this.state.username, this.state.password)
		.then((response) => {
			console.log("after authetification service")
			AuthentificationService.registerSuccessfulLoginForJwt(this.state.username, response.data.token)
			console.log("loggedIn")
			this.props.history.push(`/employees`)
		}).catch(() => {
			this.setState({ successLogIn: false })
			this.setState({ failedLogIn: true })
		})
	}
    
    render(){
        return(
            <div className="container">
				<Container fluid>
					<h1 className="large" style={{color: '#206a5d'}}>Sign in</h1>
					<p className="lead">
						<FaUserAlt /> Sing Into your account
					</p>
					{this.state.failedLogIn && <div>Invalid Credentials</div>}
					{this.state.successLogIn && <div>Successful Loged In</div>}

					<form className="form" >
						<div className="form-group">
							<input
								type="username"
								placeholder="Username"
								name="username"
								value={this.state.username}
								onChange={this.handlerChange}
								required
								autocomplete="on"
								
							/>
						</div>
						<div className="form-group">
							<input
								type="password"
								placeholder="Password"
								name="password"
								value={this.state.password}
								minLength="6"
								onChange={this.handlerChange}
							/>
						</div>
						{/* <Link to = "/cars"> <input type="submit" className="btn btn-primary" value="Login" onClick={this.login} /> </Link> */}
						<input type="submit" className="btn btn-primary" value="Login" onClick={this.login} />
					</form>
					<p className="my-1">
						Don't have an account? <Link to="/register" style={{color: '#206a5d'}} >Sign Up</Link>
					</p>
				</Container>
			
		</div>
        )
    }    
}

function ShowInvalidCredentials(props){
	if(props.failedLogIn){
		return <div>Invalid Credentials</div>
	}
	return null;
}

function ShowSuccessfulMessage(props){
	if(props.successLogIn){
		return <div>Successful Loged In</div>
	}
	return null;
}
 
export default Login;