package com.backend.controller;

import com.backend.entity.Car;
import com.backend.entity.Employee;
import com.backend.entity.Trail;
import com.backend.entity.Truck;
import com.backend.model.Event;
import com.backend.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class CalendarController {
    @Autowired
    CompanyRepository companyRepository;

    @Autowired
    CarRepository carRepository;

    @Autowired
    TruckRepository truckRepository;

    @Autowired
    TrailRepository trailRepository;

    @Autowired
    EmployeeRepository employeeRepository;

    @GetMapping("/{username}/events")
    public List<Event> getAllEvents(@PathVariable String username){
        List<Event> events = new ArrayList<>();
        Long companyId = companyRepository.findByUsername(username).getId();

        List<Car> cars = carRepository.findByCompanyId(companyId);
        events.addAll(getEventsForCars(cars));

        List<Truck> trucks = truckRepository.findByCompanyId(companyId);
        events.addAll(getEventsForTrucks(trucks));

        List<Trail> trails = trailRepository.findByCompanyId(companyId);
        events.addAll(getEventsForTrails(trails));

        List<Employee> employees = employeeRepository.findByCompanyId(companyId);
        events.addAll(getEventsForEmployees(employees));

        System.out.println("List of events: " + events);
        return events;
    }

    private Event getEvent(String type, String number, Date date){
        Event event = new Event();

        String pattern = "yyyy-MM-dd";
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat(pattern);

        String title = type + ": " + number;
        event.setTitle(title);
        event.setStart(simpleDateFormat.format(date));
        event.setBackgroundColor("#bae8c6");
        event.setTextColor("black");

        return event;
    }

    private List<Event> getEventsForCars(List<Car> cars){
        List<Event> events = new ArrayList<>();
        for (Car car: cars) {
            events.add(getEvent("Car-ITP", car.getRegistrationNumber(), car.getItpValidity()));
            events.add(getEvent("Car-RCA", car.getRegistrationNumber(), car.getRcaInsuranceValidity()));
            events.add(getEvent("Car-VI", car.getRegistrationNumber(),car.getVignetteValidity()));
        }
        return events;
    }

    private List<Event> getEventsForTrucks(List<Truck> trucks){
        List<Event> events = new ArrayList<>();
        for (Truck truck: trucks) {
            events.add(getEvent("Truck-ITP", truck.getRegistrationNumber(), truck.getItpValidity()));
            events.add(getEvent("Truck-RCA", truck.getRegistrationNumber(), truck.getRcaInsuranceValidity()));
            events.add(getEvent("Truck-VI", truck.getRegistrationNumber(), truck.getVignetteValidity()));
            events.add(getEvent("Truck-L", truck.getRegistrationNumber(), truck.getLicenseValidity()));
            events.add(getEvent("Truck-T", truck.getRegistrationNumber(), truck.getTachographValidity()));
        }
        return events;
    }

    private List<Event> getEventsForTrails(List<Trail> trails){
        List<Event> events = new ArrayList<>();
        for (Trail trail: trails) {
            events.add(getEvent("Trail-ITP", trail.getRegistrationNumber(), trail.getItpValidity()));
            events.add(getEvent("Trail-RCA", trail.getRegistrationNumber(), trail.getRcaInsuranceValidity()));
            events.add(getEvent("Trail-CMR", trail.getRegistrationNumber(), trail.getCmrInsuranceValidity()));
        }
        return events;
    }

    private List<Event> getEventsForEmployees(List<Employee> employees){
        List<Event> events = new ArrayList<>();
        for(Employee employee:employees){
            String name = employee.getFirstName() + " " + employee.getLastName();
            events.add(getEvent("E-DC", name, employee.getDriverCardValidity()));
            events.add(getEvent("E-DL", name, employee.getDriverLicenseValidity()));
            events.add(getEvent("E-DQC", name, employee.getDriverQualificationCardValidity()));
            events.add(getEvent("E-ID", name, employee.getIdentityCardValidity()));
            events.add(getEvent("E-MED", name, employee.getMedicalOpinionValidity()));
            events.add(getEvent("E-PHY", name, employee.getPsychologicalOpinionValidity()));
            events.add(getEvent("E-SS", name, employee.getSkillsSheetsValidity()));
        }
        return events;
    }
}
