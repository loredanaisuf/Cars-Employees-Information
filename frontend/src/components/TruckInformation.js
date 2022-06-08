import React, { Component } from 'react';
import { Table } from "react-bootstrap";
import {AiFillDelete, AiFillEdit} from 'react-icons/ai';
import moment from 'moment';
import TruckDataService from '../api/TruckDataService';
import AuthentificationService from './AuthentificationService';

class TruckInformation extends Component {
    constructor(props){
        super(props)
        this.state = {
            trucks: [],
            message: ''
        }
        this.deleteTruck = this.deleteTruck.bind(this)
        this.updateTruck = this.updateTruck.bind(this)
        this.addTruck = this.addTruck.bind(this)
        this.refreshTrucks = this.refreshTrucks.bind(this)
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
        this.refreshTrucks();
        console.log(this.state)
    }

    refreshTrucks() {
        let username = AuthentificationService.getLoggedInUserName()
        TruckDataService.retrieveTrucks(username)
            .then(
                response => {
                    this.setState({ trucks: response.data })
                }
            )
    }

    deleteTruck(id) {
        let username = AuthentificationService.getLoggedInUserName()
        //console.log(id + " " + username);
        TruckDataService.deleteTruck(username, id)
            .then(
                response => {
                    this.setState({ message: `Delete of car ${id} Successful` })
                    this.refreshTrucks()
                }
            )

    }

    addTruck() {
        this.props.history.push(`/trucks/-1`)
    }

    updateTruck(id) {
        console.log('update ' + id)
        this.props.history.push(`/trucks/${id}`)
    } 
       
    
 
    render(){
        return(
            <div className="container" style={{marginTop:50,  overflow: 'scroll'}}>
            <Table striped bordered hover>
                <thead  style={{verticalAlign: 'middle'}}>
                    <tr>
                        <th>Unique Identification Number</th>
                        <th>Registration Number</th>
                        <th>Brand</th>
                        <th>Fabrication Year</th>
                        <th>ITP Validity</th>
                        <th>RCA Insurance Validity</th>
                        <th>Vignette Validity</th>
                        <th>License Validity</th>
                        <th>Tachograph Validity</th>
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.trucks.map(
                            truck =>
                                <tr key={truck.id}>
                                    <td>{truck.uniqueIdentificationNumber}</td>
                                    <td>{truck.registrationNumber}</td>
                                    <td>{truck.brand}</td>
                                    <td>{truck.fabricationYear}</td>
                                    <td>{moment(truck.itpValidity).format('DD-MM-YYYY')}</td>
                                    <td>{moment(truck.rcaInsuranceValidity).format('DD-MM-YYYY')}</td>
                                    <td>{moment(truck.vignetteValidity).format('DD-MM-YYYY')}</td>
                                    <td>{moment(truck.licenseValidity).format('DD-MM-YYYY')}</td>
                                    <td>{moment(truck.tachographValidity).format('DD-MM-YYYY')}</td>
                                    <td>
                                        <span>
                                            <AiFillEdit onClick={() => this.updateTruck(truck.id)}/>
                                            <AiFillDelete  onClick={() => this.deleteTruck(truck.id)}/>
                                        </span>
                                    </td>
                                </tr>
                        )
                    }
                </tbody> 
            </Table>
            <div className="row">
                <button className="btn" style = {{background : '#206a5d',color: '#fff'}} onClick={this.addTruck} >Add</button>
            </div>
        </div>
        ) 
    }

    
}
 
export default TruckInformation;