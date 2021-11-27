package com.backend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloWorldControler {
    @GetMapping("/")
    public String index() {
        return "Greetings from first Controller!";
    }
}
