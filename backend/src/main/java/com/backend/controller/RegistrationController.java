package com.backend.controller;

import com.backend.entity.Company;
import com.backend.entity.EmployeeInformation;
import com.backend.entity.User;
import com.backend.repository.CompanyRepository;
import com.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class RegistrationController {

    @Autowired
    CompanyRepository companyRepository;

    @Autowired
    UserRepository userRepository;

    @PostMapping("/registerCompany")
    public ResponseEntity<Void> createCompany(@RequestBody Company company){

        Company createdCompany = companyRepository.save(company);

        //Location
        //Get current resource url
        ///{id}
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}").buildAndExpand(createdCompany.getId()).toUri();

        return ResponseEntity.created(uri).build();
    }


    @GetMapping("/company/{username}/")
    public Company getCompany(@PathVariable String username){
        System.out.println("get company");
        return companyRepository.findByUsername(username);
    }

    @PostMapping("/registerUser")
    public ResponseEntity<Void> createUser(@RequestBody User user, @RequestBody String companyName){
        System.out.println("HELLO FROM REGISTER USER METHOD");
        System.out.println(user);
        System.out.println("Company Name: " + companyName);
        Long companyId = companyRepository.findByCompanyName(companyName).getId();

        user.setCompanyId(companyId);
        User createdUser = userRepository.save(user);

        URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}").buildAndExpand(createdUser.getId()).toUri();

        return ResponseEntity.created(uri).build();
    }
}
