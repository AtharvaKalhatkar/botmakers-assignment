package com.atharva.loginpage_backend.auth.service; 

import com.atharva.loginpage_backend.auth.dto.AuthResponse;
import com.atharva.loginpage_backend.auth.dto.LoginRequest;
import com.atharva.loginpage_backend.auth.dto.RegisterRequest;
import com.atharva.loginpage_backend.auth.entity.User;
import com.atharva.loginpage_backend.auth.repository.UserRepository;
import com.atharva.loginpage_backend.auth.security.JwtHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    @Autowired
     private UserRepository userRepository;




    @Autowired
         private PasswordEncoder passwordEncoder;



    @Autowired
       private JwtHelper jwtHelper;

    @Autowired
    private AuthenticationManager authenticationManager;

    public String register(RegisterRequest request) {
        
        User user = new User();
        user.setName(request.getName());
        user.setEmail(request.getEmail());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        user.setRole(request.getRole());
        userRepository.save(user);
        return "User registered successfully";
    }

    public AuthResponse login(LoginRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPassword()
                )
        );

        User user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new RuntimeException("User not found"));

        String token = jwtHelper.generateToken(user.getEmail(), user.getRole().name());

        return new AuthResponse(token, user.getRole().name());
    }
}