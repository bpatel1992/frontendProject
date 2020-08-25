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
@RequestMapping(ConstantController.UserAuthorization.AUTH)
public class UserAuthorization {

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

	/**
	 * This rest point authorize user and set the token in header.
	 *
	 * @param loginRequest
	 * @return
	 */
	@PostMapping(ConstantController.UserAuthorization.SIGN_IN)
	public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginForm loginRequest) {
		Authentication authentication = authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));
		SecurityContextHolder.getContext().setAuthentication(authentication);
		String jwt = jwtProvider.generateJwtToken(authentication);
		UserDetails userDetails = (UserDetails) authentication.getPrincipal();
		return ResponseEntity.ok(new JwtResponse(jwt, userDetails.getUsername(), userDetails.getAuthorities()));
	}

	/**
	 * This rest point is used for register user in database
	 * 
	 * @param signUpRequest
	 * @return
	 */
	@PostMapping(ConstantController.UserAuthorization.SIGN_UP)
	public ResponseEntity<?> registerUser(@Valid @RequestBody SignUpForm signUpRequest) {
		if (Boolean.TRUE.equals(userRepository.existsByEmail(signUpRequest.getEmail()))) {
			return new ResponseEntity<>(new ResponseMessage(ConstantController.UserAuthorization.FAILURE_MESSAGE),
					HttpStatus.BAD_REQUEST);
		}

		// Creating user's account
		User user = new User(signUpRequest.getFirstName(), signUpRequest.getLastName(), signUpRequest.getUsername(),
				signUpRequest.getEmail(), encoder.encode(signUpRequest.getPassword()));
		userRepository.save(user);
		return new ResponseEntity<>(new ResponseMessage(ConstantController.UserAuthorization.SUCCESS_MESSAGE),
				HttpStatus.OK);
	}
}