import React, { Component } from "react";
import '../App.css'
import CarInformation from "./CarInformation";
import EmployeeInformation from "./EmployeeInformation";
 
class PopupEmployees extends EmployeeInformation{
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div className="popup-box">
        <div className="box">
          <span className="close-icon" onClick={this.props.handleClose}>x</span>
          {this.props.content}
        </div>
      </div>
    );
    }
  
}
 
export default PopupEmployees;