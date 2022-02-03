import React, { Component, useState } from 'react';
import PopupEmployees from './PopupEmployees';



class CarInformation extends Component {
    constructor(props){
        super(props)
        this.state = {
            cars: [],
            isOpen: false
        }
        this.togglePopup = this.togglePopup.bind(this)
    }
    
    togglePopup = () => {
        this.setState({ isOpen: !this.state.isOpen });
        console.log("isOpen from toggle : " + this.state.isOpen)
    }
 
    render(){
        return(
            <div>
                <input
                type="button"
                value="Click to Open Popup"
                onClick={() => this.togglePopup()}
                />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                {this.state.isOpen && <PopupEmployees
                content={<>
                    <b>Design your Popup</b>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <button>Test button</button>
                </>}
                handleClose={this.togglePopup}
                />}
            </div>
        ) 
    }

    
}
 
export default CarInformation;