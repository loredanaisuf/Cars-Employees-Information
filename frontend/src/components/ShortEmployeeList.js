import React, { Component, useState } from 'react'
import EmployeeDataService from '../api/EmployeeDataService'
import { Table } from "react-bootstrap";
import {AiFillEdit, AiOutlinePlusCircle} from 'react-icons/ai';
import {TiDelete} from 'react-icons/ti';
import "bootstrap/dist/css/bootstrap.min.css";
import PopupEmployees from './PopupEmployees';
import { RiContrastDropLine } from 'react-icons/ri';
 
class ShortEmployeeList extends Component {
    
    constructor(props) {
        console.log('constructor')
        super(props)
        this.state = {
            employees: [],
            message: null,
            showModalPopup: false,
            content: ''
                  
        }
        this.deleteEmployeeClicked = this.deleteEmployeeClicked.bind(this)
        this.updateEmployeeClicked = this.updateEmployeeClicked.bind(this)
        this.addEmployeeClicked = this.addEmployeeClicked.bind(this)
        this.refreshEmployees = this.refreshEmployees.bind(this)
        //this.togglePopup = this.togglePopup.bind(this)
    }
    isShowPopup = (status, employee) => {  
        console.log("This is the employee sent from de shortEmployee page: " + employee)
        this.setState({ 
            showModalPopup: status,
            employee: employee
        });  
      }; 

    render() {
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
                                <th>More</th>
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
                                            <td>{employee.employmentDate}</td>
                                            <td>
                                                <AiOutlinePlusCircle onClick={() => this.isShowPopup(true, employee)}>Open</AiOutlinePlusCircle>
                                                <PopupEmployees
                                               
                                                    firstName = {employee.firstName}
                                                    showModalPopup={this.state.showModalPopup}  
                                                    onPopupClose={this.isShowPopup}  
                                                    content={this.state.content}
                                                 />
                                                
                                            </td>
                                            <td>        
                                                {/* <AiFillEdit  onClick={() => this.togglePopup} style={{marginRight:15}}/>  */}
                                                <AiFillEdit onClick={() => this.updateEmployeeClicked(employee.id)}/>
                                                <TiDelete onClick={() => this.deleteEmployeeClicked(employee.id)}/>
                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </Table>
                    {/* {
                        this.state.isOpen &&
                            <PopupEmployees
                            showModalPopup={this.state.showModalPopup}  
                            onPopupClose={this.isShowPopup}  
                            content={this.state.content}
                        />
                    } */}

                        
                    <div className="row">
                        <button className="btn" style = {{background : '#206a5d',color: '#fff'}} onClick={this.addEmployeeClicked}>Add</button>
                    </div>
                </div>                           
            </div>
        )
    }

    // togglePopup () {
    //     this.setState({ isOpen: !this.state.isOpen });
    //     console.log("isOpen from toggle : " + this.state.isOpen)
    // }
    

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
        EmployeeDataService.retrieveAllEmployees()
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
        EmployeeDataService.deleteEmployee(id)
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

export default  ShortEmployeeList;