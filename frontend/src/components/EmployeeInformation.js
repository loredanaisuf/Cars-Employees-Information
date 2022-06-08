import React, { Component, useState } from 'react'
import EmployeeDataService from '../api/EmployeeDataService'
import { Table } from "react-bootstrap";
import {AiFillEdit, AiFillDelete} from 'react-icons/ai';
import "bootstrap/dist/css/bootstrap.min.css";
import AuthentificationService from './AuthentificationService';
import moment from 'moment';
 
class EmployeeInformation extends Component {
    
    constructor(props) {
        console.log('constructor')
        super(props)
        this.state = {
            employees: [],
            message: null,
            isOpen: false
        }
        this.deleteEmployee = this.deleteEmployee.bind(this)
        this.updateEmployee = this.updateEmployee.bind(this)
        this.addEmployee = this.addEmployee.bind(this)
        this.refreshEmployees = this.refreshEmployees.bind(this)
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
        let username = AuthentificationService.getLoggedInUserName()
        EmployeeDataService.retrieveEmployees(username)
            .then(
                response => {
                    this.setState({ employees: response.data })
                }
            )
    }

    deleteEmployee(id) {
        let username = AuthentificationService.getLoggedInUserName()
      
        EmployeeDataService.deleteEmployee(username, id)
            .then(
                response => {
                    this.setState({ message: `Delete of employee ${id} Successful` })
                    this.refreshEmployees()
                }
            )
    }

    addEmployee() {
        this.props.history.push(`/employees/-1`)
    }

    updateEmployee(id) {
        this.props.history.push(`/employees/${id}`)
    }

    render() {
        return (
            <div>
                {this.state.message && <div class="alert alert-success">{this.state.message}</div>}
                <div className="container" style={{marginTop: 50, overflow: 'scroll'}}> 
                    <Table striped bordered hover >
                        <thead style={{verticalAlign: 'middle'}}>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Employment Date</th>
                                <th>Identity Card</th>
                                <th>Driver License</th>
                                <th>Driver Card</th>
                                <th>Driver Qualification Card</th>
                                <th>Psychological Opinion</th>
                                <th>Medical Opinion</th>
                                <th>Skills Sheet</th>
                                <th>Username</th>
                                <th>Password</th>
                                <th>Options</th>
                            </tr>
                        </thead>
                        <tbody >
                            {
                                this.state.employees.map(
                                    employee =>
                                        <tr key={employee.id}>
                                            <td>{employee.firstName}</td>
                                            <td>{employee.lastName}</td>
                                            <td>{moment(employee.employmentDate).format('DD-MM-YYYY')}</td>
                                            <td>{moment(employee.identityCardValidity).format('DD-MM-YYYY')}</td>
                                            <td>{moment(employee.driverLicenseValidity).format('DD-MM-YYYY')}</td>
                                            <td>{moment(employee.driverCardValidity).format('DD-MM-YYYY')}</td>
                                            <td>{moment(employee.driverQualificationCardValidity).format('DD-MM-YYYY')}</td>
                                            <td>{moment(employee.psychologicalOpinionValidity).format('DD-MM-YYYY')}</td>
                                            <td>{moment(employee.medicalOpinionValidity).format('DD-MM-YYYY')}</td>
                                            <td>{moment(employee.skillsSheetsValidity).format('DD-MM-YYYY')}</td>
                                            <td>{employee.username}</td>
                                            <td>{employee.password}</td>
                                            <td>
                                                <span>
                                                    <AiFillEdit  onClick={() => this.updateEmployee(employee.id)} style={{marginRight:15}}/>
                                                    <AiFillDelete onClick={() => this.deleteEmployee(employee.id)}/> 
                                                </span>
                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </Table>
                    <div className="row">
                        <button className="btn" style = {{background : '#206a5d',color: '#fff'}} onClick={this.addEmployee}>Add</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default  EmployeeInformation;