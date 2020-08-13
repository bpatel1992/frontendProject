package com.ecommerce.srv.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.srv.model.Employee;
import com.ecommerce.srv.repository.EmployeeRepository;

@RestController
@CrossOrigin
public class EmployeeController {

	@Autowired
	private EmployeeRepository employeeRepository;

	@PostMapping("/save")
	public void saveEmployee(@RequestBody Employee employee) {
		this.employeeRepository.save(employee);
	}

	@GetMapping("/getemployees")
	@ResponseBody
	public List<Employee> getEmployees() {
		return employeeRepository.findAll();
	}

	@GetMapping("/getemployee")
	@ResponseBody
	public Optional<Employee> getEmployeeById(@RequestParam long id) {
		return this.employeeRepository.findById(id);
	}

	@DeleteMapping("/deleteEmployee")
	public void deleteEmployee(@RequestParam long id) {
		this.employeeRepository.deleteById(id);
	}

	@PostMapping("/update")
	public void updateEmployee(@RequestBody Employee employee) {
		this.employeeRepository.save(employee);
	}
}