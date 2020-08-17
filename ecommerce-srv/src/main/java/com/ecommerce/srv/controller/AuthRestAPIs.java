package com.ecommerce.srv.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.srv.form.LoginForm;
import com.ecommerce.srv.form.SignUpForm;
import com.ecommerce.srv.jwt.config.JwtProvider;
import com.ecommerce.srv.model.JwtResponse;
import com.ecommerce.srv.model.ResponseMessage;
import com.ecommerce.srv.model.User;
import com.ecommerce.srv.repository.RoleRepository;
import com.ecommerce.srv.repository.UserRepository;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auth")
public class AuthRestAPIs {

	@Autowired
	AuthenticationManager authenticationManager;

	@Autowired
	UserRepository userRepository;

	@Autowired
	RoleRepository roleRepository;

	@Autowired
	PasswordEncoder encoder;

	@Autowired
	JwtProvider jwtProvider;

	@PostMapping("/signin")
	public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginForm loginRequest) {
		Authentication authentication = authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(loginRequest.getEmail(), loginRequest.getPassword()));
		SecurityContextHolder.getContext().setAuthentication(authentication);
		String jwt = jwtProvider.generateJwtToken(authentication);
		UserDetails userDetails = (UserDetails) authentication.getPrincipal();
		return ResponseEntity.ok(new JwtResponse(jwt, userDetails.getUsername(), userDetails.getAuthorities()));
	}

	@PostMapping("/signup")
	public ResponseEntity<?> registerUser(@Valid @RequestBody SignUpForm signUpRequest) {

		if (userRepository.existsByEmail(signUpRequest.getEmail())) {
			return new ResponseEntity<>(new ResponseMessage("Fail -> Email is already in use!"),
					HttpStatus.BAD_REQUEST);
		}

		// Creating user's account
		User user = new User(signUpRequest.getFirstName(), signUpRequest.getLastName(), signUpRequest.getEmail(),
				encoder.encode(signUpRequest.getPassword()));
		/*
		 * Set<Role> roles = new HashSet<>(); strRoles.forEach(role -> { switch (role) {
		 * case "admin": Role adminRole = roleRepository.findByName(RoleName.ROLE_ADMIN)
		 * .orElseThrow(() -> new
		 * RuntimeException("Fail! -> Cause: User Role not find."));
		 * roles.add(adminRole);
		 *
		 * break; case "pm": Role pmRole = roleRepository.findByName(RoleName.ROLE_PM)
		 * .orElseThrow(() -> new
		 * RuntimeException("Fail! -> Cause: User Role not find.")); roles.add(pmRole);
		 *
		 * break; default: Role userRole = roleRepository.findByName(RoleName.ROLE_USER)
		 * .orElseThrow(() -> new
		 * RuntimeException("Fail! -> Cause: User Role not find."));
		 * roles.add(userRole); } });
		 *
		 * user.setRoles(roles);
		 */
		userRepository.save(user);
		return new ResponseEntity<>(new ResponseMessage("User registered successfully!"), HttpStatus.OK);
	}
}