package com.atharva.loginpage_backend.auth.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
public class ApiController {

    @GetMapping("/api/public")
    public ResponseEntity<String> publicEndpoint() {
        return ResponseEntity.ok("This is public content - anyone can see this!");
    }

    @GetMapping("/api/user")
    public ResponseEntity<String> userEndpoint() {
        return ResponseEntity.ok("This is user content - only USER and ADMIN can see this!");
    }

    @GetMapping("/api/admin")
    public ResponseEntity<String> adminEndpoint() {
        return ResponseEntity.ok("This is admin content - only ADMIN can see this!");
    }
}