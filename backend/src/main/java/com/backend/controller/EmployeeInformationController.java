package com.backend.controller;

import com.backend.entity.EmployeeInformation;
import com.backend.service.HardcodedService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
public class EmployeeInformationController {

    @Autowired
    HardcodedService hardcodedService = new HardcodedService();


    @GetMapping("/employees")
    public List<EmployeeInformation> getAllEmployees(){
        return hardcodedService.findAll();
        //return todoService.findAll();
    }

    @GetMapping("/employees/{id}")
    public EmployeeInformation getEmployeeInformation(@PathVariable long id){
        return hardcodedService.findById(id);
    }

    // DELETE /users/{username}/todos/{id}
    @DeleteMapping("/employees/{id}")
    public ResponseEntity<Void> deleteTodo(@PathVariable long id) {

        hardcodedService.deleteById(id);

        return ResponseEntity.noContent().build();
    }


    //Edit/Update a Todo
    //PUT /users/{user_name}/todos/{todo_id}
    @PutMapping("/employees/{id}")
    public ResponseEntity<EmployeeInformation> updateTodo(@PathVariable long id, @RequestBody EmployeeInformation employeeInformation){

        EmployeeInformation employeeInformationUpdated = hardcodedService.save(employeeInformation);

        return new ResponseEntity<EmployeeInformation>(employeeInformation, HttpStatus.OK);
    }

    @PostMapping("/employees/todos")
    public ResponseEntity<Void> createTodo(@RequestBody EmployeeInformation employeeInformation){

        EmployeeInformation createdEmployeeInformation = hardcodedService.save(employeeInformation);

        //Location
        //Get current resource url
        ///{id}
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}").buildAndExpand(createdEmployeeInformation.getId()).toUri();

        return ResponseEntity.created(uri).build();
    }
}
