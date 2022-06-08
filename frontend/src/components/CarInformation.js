import React, { Component } from 'react';
import { Table } from "react-bootstrap";
import {AiFillEdit, AiFillDelete} from 'react-icons/ai';
import AuthentificationService from './AuthentificationService';
import CarDataService from '../api/CarDataService';
import moment from 'moment';


class CarInformation extends Component {
    constructor(props){
        super(props)
        this.state = {
            cars: [],
            message: ''
        }
        this.deleteCar = this.deleteCar.bind(this)
        this.updateCar = this.updateCar.bind(this)
        this.addCar = this.addCar.bind(this)
        this.refreshCars = this.refreshCars.bind(this)
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
        this.refreshCars();
        console.log(this.state)
    }

    refreshCars() {
        let username = AuthentificationService.getLoggedInUserName()
        CarDataService.retrieveCars(username)
            .then(
                response => {
                    this.setState({ cars: response.data })
                }
            )
    }

    deleteCar(id) {
        let username = AuthentificationService.getLoggedInUserName()
        //console.log(id + " " + username);
        CarDataService.deleteCar(username, id)
            .then(
                response => {
                    this.setState({ message: `Delete of car ${id} Successful` })
                    this.refreshCars()
                }
            )

    }

    addCar() {
        this.props.history.push(`/cars/-1`)
    }

    updateCar(id) {
        console.log('update ' + id)
        this.props.history.push(`/cars/${id}`)
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
                        <th>Options</th>
                    </tr>
                </thead>
                 <tbody>
                    {
                        this.state.cars.map(
                            car =>
                                <tr key={car.id}>
                                    <td>{car.uniqueIdentificationNumber}</td>
                                    <td>{car.registrationNumber}</td>
                                    <td>{car.brand}</td> 
                                    <td>{car.fabricationYear}</td>
                                    <td>{moment(car.itpValidity).format('DD-MM-YYYY')}</td>
                                    <td>{moment(car.rcaInsuranceValidity).format('DD-MM-YYYY')}</td>
                                    <td>{moment(car.vignetteValidity).format('DD-MM-YYYY')}</td>
                                    <td>
                                        <span>
                                            <AiFillEdit onClick={() => this.updateCar(car.id)}/>
                                            <AiFillDelete onClick={() => this.deleteCar(car.id)}/>
                                        </span>
                                    </td>
                                </tr>
                        )
                    }
                </tbody> 
            </Table>
            <div className="row">
                <button className="btn" style = {{background : '#206a5d',color: '#fff'}} onClick={this.addCar} >Add</button>
            </div>
        </div>
        ) 
    }

    
}
 
export default CarInformation;