import React from "react";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";

import "../fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";
import events from "./events";
import { Component } from "react";
import CalendarDataService from "../api/CalendarDataService";
import AuthentificationService from "./AuthentificationService";


class CalendarClass extends Component {
    constructor(props){
        super(props)
        this.state = {
            stateEvents: []
        }
        this.retrieveEvents = this.retrieveEvents.bind(this);
    }

    componentDidMount() {
        console.log('componentDidMount')
        this.retrieveEvents();
        console.log(this.state.stateEvents)
    }


    retrieveEvents(){
        let username = AuthentificationService.getLoggedInUserName()
        CalendarDataService.retrieveEvents(username)
            .then(
                response => {
                    this.setState({ stateEvents: response.data })
                    console.log("The response data is: " + response.data.events)
                }
            )

    }
    
    render(){
        console.log(this.state.stateEvents)
        this.state.stateEvents.map(event => console.log("Event title: " + event.title + " bg color: " + event.backgroundColor))
        return (
            
            <div className="container">
            <FullCalendar
                defaultView="dayGridMonth"
                locale="en"
                header={{
                    left: "prev,next",
                    center: "title",
                    right: "dayGridMonth,timeGridWeek,timeGridDay"
                }}
                plugins={[dayGridPlugin, timeGridPlugin]}
                events={this.state.stateEvents}
            />
            </div>
        );
    }
   
}

export default CalendarClass;
