import React, { Component, useState } from 'react';
import PopupEmployees from './PopupEmployees';
import { Table } from "react-bootstrap";
import {TiDelete} from 'react-icons/ti';



class TruckInformation extends Component {
    constructor(props){
        super(props)
        this.state = {
            cars: []
        }
    }
    
    
 
    render(){
        return(
            <div className="container" style={{marginTop:50}}>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Unique Identification Number</th>
                        <th>Registration Number</th>
                        <th>Brand</th>
                        <th>Year of manufacture</th>
                        <th>ITP validity</th>
                        <th>RCA insurance validity</th>
                        <th>Vinieta validity</th>
                        <th>License validity</th>
                        <th>Tachograph  validity</th>
                        <th>Options</th>
                    </tr>
                </thead>
                {/* <tbody>
                    {
                        this.state.employees.map(
                            employee =>
                                <tr key={employee.id}>
                                    <td>{employee.firstName}</td>
                                    <td>{employee.lastName}</td>
                                    {/*<td>{moment(employee.employmentDate).format('DD-MM-YYYY')}</td>*/}
                                    {/* <td>{employee.employmentDate}</td> */}
                                    {/*<td>{moment(employee.identityCardValidity).format('DD-MM-YYYY')}</td>*/}
                                    {/* <td>{employee.identityCardValidity}</td>
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
                                           {/* <TiDelete />
                                        </span>
                                    </td>
                                </tr>
                        )
                    }
                </tbody> */} 
            </Table>
            <div className="row">
                <button className="btn" style = {{background : '#206a5d',color: '#fff'}} >Add</button>
            </div>
        </div>
        ) 
    }

    
}
 
export default TruckInformation;