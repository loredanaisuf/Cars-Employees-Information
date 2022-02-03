import React, { Component, useState } from 'react'
import EmployeeInformationService from '../api/EmployeeInformationService'
import { Table } from "react-bootstrap";
import {AiFillEdit} from 'react-icons/ai';
import {TiDelete} from 'react-icons/ti';
import "bootstrap/dist/css/bootstrap.min.css";
import PopupEmployees from './PopupEmployees';
import { RiContrastDropLine } from 'react-icons/ri';
 
class EmployeeInformation extends Component {
    
    constructor(props) {
        console.log('constructor')
        super(props)
        this.state = {
            employees: [],
            message: null,
            isOpen: false
        }
        this.deleteEmployeeClicked = this.deleteEmployeeClicked.bind(this)
        this.updateEmployeeClicked = this.updateEmployeeClicked.bind(this)
        this.addEmployeeClicked = this.addEmployeeClicked.bind(this)
        this.refreshEmployees = this.refreshEmployees.bind(this)
        this.togglePopup = this.togglePopup.bind(this)
    }

    render() {
        console.log('render')
        console.log("is open = " + this.state.isOpen)
        return (
            <div>
                {this.state.message && <div class="alert alert-success">{this.state.message}</div>}
                <div className="container" style={{marginTop:50}}>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Employment Date</th>
                                <th>Identity Card Validity</th>
                                <th>Driver License Validity</th>
                                <th>Driver Card Validity</th>
                                <th>Driver Qualification Card Validity</th>
                                <th>Psychological Opinion Validity</th>
                                <th>Medical Opinion Validity</th>
                                <th>Skills Sheet Validity</th>
                                <th>Options</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.employees.map(
                                    employee =>
                                        <tr key={employee.id}>
                                            <td>{employee.firstName}</td>
                                            <td>{employee.lastName}</td>
                                            {/*<td>{moment(employee.employmentDate).format('DD-MM-YYYY')}</td>*/}
                                            <td>{employee.employmentDate}</td>
                                            {/*<td>{moment(employee.identityCardValidity).format('DD-MM-YYYY')}</td>*/}
                                            <td>{employee.identityCardValidity}</td>
                                            <td>{employee.driverLicenseValidity}</td>
                                            <td>{employee.driverCardValidity}</td>
                                            <td>{employee.driverQualificationCardValidity}</td>
                                            <td>{employee.psychologicalOpinionValidity}</td>
                                            <td>{employee.medicalOpinionValidity}</td>
                                            <td>{employee.skillsSheetsValidity}</td>
                                            <td>
                                                <span>
                                                    <button onClick={() => this.togglePopup()}>Open</button>
                                                    
                                                    {/* <AiFillEdit  onClick={() => this.togglePopup} style={{marginRight:15}}/>  */}
                                                   {/* <AiFillEdit onClick={() => this.updateEmployeeClicked(employee.id)}/> */}
                                                    <TiDelete onClick={() => this.deleteEmployeeClicked(employee.id)}/>
                                                </span>
                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </Table>
                    <div className="row">
                        <button className="btn" style = {{background : '#206a5d',color: '#fff'}} onClick={this.addEmployeeClicked}>Add</button>
                    </div>
                </div>
                <PopupEmployees content={<>
                             <b>Design your Popup</b>
                             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                             <button>Test button</button>
                         </>}
                         handleClose={this.togglePopup}/>
                
                   
                
            </div>
        )
    }

    togglePopup () {
        this.setState({ isOpen: !this.state.isOpen });
        console.log("isOpen from toggle : " + this.state.isOpen)
      }
    

    componentWillUnmount() {
        console.log('componentWillUnmount')
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate')
        console.log(nextProps)
        console.log(nextState)
        return true
    }

    componentDidMount() {
        console.log('componentDidMount')
        this.refreshEmployees();
        console.log(this.state)
    }

    refreshEmployees() {
        //let username = AuthenticationService.getLoggedInUserName()
        EmployeeInformationService.retrieveAllEmployees()
            .then(
                response => {
                    //console.log(response);
                    this.setState({ employees: response.data })
                }
            )
    }

    deleteEmployeeClicked(id) {
        //let username = AuthenticationService.getLoggedInUserName()
        //console.log(id + " " + username);
        EmployeeInformationService.deleteEmployee(id)
            .then(
                response => {
                    this.setState({ message: `Delete of employee ${id} Successful` })
                    this.refreshEmployees()
                }
            )

    }

    addEmployeeClicked() {
        this.props.history.push(`/employees/-1`)
    }

    updateEmployeeClicked(id) {
        console.log('update ' + id)
        this.props.history.push(`/employees/${id}`)
        // /todos/${id}
        // let username = AuthenticationService.getLoggedInUserName()
        // //console.log(id + " " + username);
        // TodoDataService.deleteTodo(username, id)
        //  .then (
        //      response => {
        //         this.setState({message : `Delete of todo ${id} Successful`})
        //         this.refreshTodos()
        //      }
        //  )

    }
}

export default  EmployeeInformation;