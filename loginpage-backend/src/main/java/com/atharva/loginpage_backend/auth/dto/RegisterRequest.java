package com.atharva.loginpage_backend.auth.dto;

import com.atharva.loginpage_backend.auth.entity.Role;
import lombok.Data;

@Data
public class RegisterRequest {

     private String name;
    private String email;
    private String password;
  
    private Role role;
    
}
