package com.backend.controller;

import com.backend.entity.Employee;
import com.backend.repository.CompanyRepository;
import com.backend.repository.EmployeeRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class EmployeeController {
    private final Logger logger = LoggerFactory.getLogger(this.getClass());
    @Autowired
    EmployeeRepository employeeRepository;

    @Autowired
    CompanyRepository companyRepository;


    @GetMapping("/{username}/employees")
    public List<Employee> getAllEmployees(@PathVariable String username){
        return employeeRepository.findByCompanyId(companyRepository.findByUsername(username).getId());
    }

    @GetMapping("/{username}/employees/{id}")
    public Employee getEmployee(@PathVariable String username, @PathVariable long id){
        return employeeRepository.findById(id).get();
    }

    @DeleteMapping("/{username}/employees/{id}")
    public ResponseEntity<Void> deleteTruck(@PathVariable String username, @PathVariable long id) {
        employeeRepository.deleteById(id);
        logger.info(username + "deleted employee with id: " + id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/{username}/employees/{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable String username, @PathVariable long id, @RequestBody Employee employee){
        System.out.println("Username:" + username);
        Long companyId = companyRepository.findByUsername(username).getId();
        employee.setCompanyId(companyId);
        Employee updatedEmployee = employeeRepository.save(employee);
        logger.info(username + "updated employee with id: " + id);
        return new ResponseEntity<Employee>(employee, HttpStatus.OK);
    }

    @PostMapping("/{username}/employees")
    public ResponseEntity<Void> createEmployee(@PathVariable String username, @RequestBody Employee employee){
        System.out.println("Username:" + username);
        Long companyId = companyRepository.findByUsername(username).getId();
        System.out.println("Company id: " + companyId);
        employee.setCompanyId(companyId);
        System.out.println("Truck:");
        System.out.println("Truck:" + employee);
        System.out.println("Before save");
        Employee createdEmployee = employeeRepository.save(employee);
        logger.info(username + "added employee with id: " + employee.getId());

        //Location
        //Get current resource url
        ///{id}
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}").buildAndExpand(createdEmployee.getId()).toUri();

        return ResponseEntity.created(uri).build();
    }
}
