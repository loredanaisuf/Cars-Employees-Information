package com.backend.controller;

import com.backend.entity.Car;
import com.backend.entity.Truck;
import com.backend.repository.CarRepository;
import com.backend.repository.CompanyRepository;
import com.backend.repository.TruckRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class TruckController {
    @Autowired
    TruckRepository truckRepository;

    @Autowired
    CompanyRepository companyRepository;


    @GetMapping("/{username}/trucks")
    public List<Truck> getAllTrucks(@PathVariable String username){
        return truckRepository.findByCompanyId(companyRepository.findByUsername(username).getId());
    }

    @GetMapping("/{username}/trucks/{id}")
    public Truck getTruck(@PathVariable String username, @PathVariable long id){
        return truckRepository.findById(id).get();
    }

    @DeleteMapping("/{username}/trucks/{id}")
    public ResponseEntity<Void> deleteTruck(@PathVariable String username, @PathVariable long id) {
        truckRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/{username}/trucks/{id}")
    public ResponseEntity<Truck> updateTruck(@PathVariable String username, @PathVariable long id, @RequestBody Truck truck){
        System.out.println("Username:" + username);
        Long companyId = companyRepository.findByUsername(username).getId();
        truck.setCompanyId(companyId);
        Truck updatedTruck = truckRepository.save(truck);
        return new ResponseEntity<Truck>(truck, HttpStatus.OK);
    }

    @PostMapping("/{username}/trucks")
    public ResponseEntity<Void> createTruck(@PathVariable String username, @RequestBody Truck truck){
        System.out.println("Username:" + username);
        Long companyId = companyRepository.findByUsername(username).getId();
        System.out.println("Company id: " + companyId);
        truck.setCompanyId(companyId);
        System.out.println("Truck:");
        System.out.println("Truck:" + truck);
        System.out.println("Before save");
        Truck createdTruck = truckRepository.save(truck);

        //Location
        //Get current resource url
        ///{id}
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}").buildAndExpand(createdTruck.getId()).toUri();

        return ResponseEntity.created(uri).build();
    }
}
