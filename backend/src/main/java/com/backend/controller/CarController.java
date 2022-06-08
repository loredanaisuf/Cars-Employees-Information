package com.backend.controller;

import com.backend.entity.Car;
import com.backend.repository.CarRepository;
import com.backend.repository.CompanyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class CarController {
    @Autowired
    CarRepository carRepository;

    @Autowired
    CompanyRepository companyRepository;


    @GetMapping("/{username}/cars")
    public List<Car> getAllCars(@PathVariable String username){
        return carRepository.findByCompanyId(companyRepository.findByUsername(username).getId());
    }

    @GetMapping("/{username}/cars/{id}")
    public Car getCar(@PathVariable String username, @PathVariable long id){
        System.out.println("Id from getTrail: " + id);
        return carRepository.findById(id).get();
    }

    @DeleteMapping("/{username}/cars/{id}")
    public ResponseEntity<Void> deleteCar(@PathVariable String username, @PathVariable long id) {
        carRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/{username}/cars/{id}")
    public ResponseEntity<Car> updateCar(@PathVariable String username, @PathVariable long id, @RequestBody Car car){
        System.out.println("Username:" + username);
        Long companyId = companyRepository.findByUsername(username).getId();
        car.setCompanyId(companyId);
        Car updatedCar = carRepository.save(car);
        return new ResponseEntity<Car>(car, HttpStatus.OK);
    }

    @PostMapping("/{username}/cars")
    public ResponseEntity<Void> createCar(@PathVariable String username, @RequestBody Car car){
        System.out.println("Username:" + username);
        Long companyId = companyRepository.findByUsername(username).getId();
        System.out.println("Company id: " + companyId);
        car.setCompanyId(companyId);
        System.out.println("Trail:");
        System.out.println("Trail:" + car);
        System.out.println("Before save");
        Car createdCar = carRepository.save(car);

        //Location
        //Get current resource url
        ///{id}
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}").buildAndExpand(createdCar.getId()).toUri();

        return ResponseEntity.created(uri).build();
    }
}
