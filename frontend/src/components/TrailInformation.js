import React, { Component } from 'react';
import { Table } from "react-bootstrap";
import {AiFillEdit, AiFillDelete} from 'react-icons/ai';
import moment from 'moment'
import TrailDataService from '../api/TrailDataService';
import AuthenticationService, { TOKEN } from '../AuthentificationService'

class TrailInformation extends Component {
    constructor(props){
        super(props)
        this.state = {
            trails: [],
            message: null
        }
        
        this.deleteTrail = this.deleteTrail.bind(this)
        this.updateTrail = this.updateTrail.bind(this)
        this.addTrail = this.addTrail.bind(this)
        this.refreshTrails = this.refreshTrails.bind(this)
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
        this.refreshTrails();
        console.log(this.state)
    }

    refreshTrails() {
        let username = AuthenticationService.getLoggedInUserName()
        let token = localStorage.getItem(TOKEN)
        TrailDataService.retrieveAllTrails(username, token)
            .then(
                response => {
                    this.setState({ trails: response.data })
                }
            )
    }

    deleteTrail(id) {
        let username = AuthenticationService.getLoggedInUserName()
        let token = localStorage.getItem(TOKEN)
        //console.log(id + " " + username);
        TrailDataService.deleteTrail(username, id, token)
            .then(
                response => {
                    this.setState({ message: `Delete of trail ${id} Successful` })
                    this.refreshTrails()
                }
            )

    }

    addTrail() {
        this.props.history.push(`/trails/-1`)
    }

    updateTrail(id) {
        console.log('update ' + id)
        this.props.history.push(`/trails/${id}`)
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
                        <th>CMR Insurance Validity</th>
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.trails.map(
                            trail =>
                                <tr key={trail.id}>
                                    <td>{trail.uniqueIdentificationNumber}</td>
                                    <td>{trail.registrationNumber}</td>
                                    <td>{trail.brand}</td> 
                                    <td>{trail.fabricationYear}</td>
                                    <td>{moment(trail.itpValidity).format('DD-MM-YYYY')}</td>  
                                    <td>{moment(trail.rcaInsuranceValidity).format('DD-MM-YYYY')}</td>
                                    <td>{moment(trail.cmrInsuranceValidity).format('DD-MM-YYYY')}</td>
                                    <td >
                                        <span style={{alignItems:'center'}}>
                                            <AiFillEdit onClick={() => this.updateTrail(trail.id)}/> 
                                            <AiFillDelete onClick={() => this.deleteTrail(trail.id)}/>
                                        </span>
                                    </td>
                                </tr>
                        )
                    }
                </tbody> 
            </Table>
            <div className="row">
                <button className="btn" style = {{background : '#206a5d',color: '#fff'}} onClick={this.addTrail} >Add</button>
            </div>
        </div>
        ) 
    }

    
}
 
export default TrailInformation;