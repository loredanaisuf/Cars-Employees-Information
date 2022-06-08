package com.backend.controller;

import com.backend.entity.Trail;
import com.backend.repository.CompanyRepository;
import com.backend.repository.TrailRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class TrailController {
    @Autowired
    TrailRepository trailRepository;

    @Autowired
    CompanyRepository companyRepository;


    @GetMapping("/{username}/trails")
    public List<Trail> getAllTrails(@PathVariable String username){
        return trailRepository.findByCompanyId(companyRepository.findByUsername(username).getId());
    }

    @GetMapping("/{username}/trails/{id}")
    public Trail getTrail(@PathVariable String username, @PathVariable long id){
        System.out.println("Id from getTrail: " + id);
        return trailRepository.findById(id).get();
    }

    @DeleteMapping("/{username}/trails/{id}")
    public ResponseEntity<Void> deleteTrail(@PathVariable String username, @PathVariable long id) {
        trailRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/{username}/trails/{id}")
    public ResponseEntity<Trail> updateTrail(@PathVariable String username, @PathVariable long id, @RequestBody Trail trail){
        System.out.println("Username:" + username);
        Long companyId = companyRepository.findByUsername(username).getId();
        trail.setCompanyId(companyId);
        Trail trailUpdated = trailRepository.save(trail);
        return new ResponseEntity<Trail>(trail, HttpStatus.OK);
    }

    @PostMapping("/{username}/trails")
    public ResponseEntity<Void> createTrail(@PathVariable String username, @RequestBody Trail trail){
        String ceva = "ceva";
        System.out.println("Username:" + username);
        Long companyId = companyRepository.findByUsername(username).getId();
        System.out.println("Company id: " + companyId);
        trail.setCompanyId(companyId);
        System.out.println("Trail:");
        System.out.println("Trail:" + trail);
        System.out.println("Before save");
        Trail createdTrail = trailRepository.save(trail);

        //Location
        //Get current resource url
        ///{id}
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}").buildAndExpand(createdTrail.getId()).toUri();

        return ResponseEntity.created(uri).build();
    }
}
