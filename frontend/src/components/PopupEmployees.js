import React, { Component } from "react";
import '../App.css'
import CarInformation from "./CarInformation";
import EmployeeInformation from "./EmployeeInformation";
import ShortEmployeeList from "./ShortEmployeeList";
import { Modal, Table } from 'react-bootstrap';  

class PopupEmployees extends Component{
  constructor(props) {  
    super(props);  
    this.state = {  
        showModal: false,
    };  
}  

isShowModal = (status) => {  
    this.handleClose();  
    this.setState({ showModal: status });  
}  

handleClose = () => {  
    this.props.onPopupClose(false);  
}  

    render() {
        return ( 
          <Modal show={this.props.showModalPopup} onHide={this.handleClose} 
          >
              <div className="popup-box">
              <div className="box">
                 <span className="close-icon" onClick={() => this.isShowModal(true)}>x</span>
                 <p><td>Finally popop is working!!!!</td></p>
                 <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            <td>{console.log("Console log from popup" + this.props.firstName)}</td>
                            <td>Isuf</td>
                        </tbody>
                    </Table>
              </div>
             </div>
          </Modal>
        );
      } 

    // handleClose  = () =>  {
    //   console.log("handleClose from popup");
    //   this.setState({ isOpen: false });
    // }
  
}
 
export default PopupEmployees;