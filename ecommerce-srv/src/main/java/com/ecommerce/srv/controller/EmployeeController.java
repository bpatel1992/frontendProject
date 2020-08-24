package com.ecommerce.srv.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.srv.model.Employee;
import com.ecommerce.srv.repository.EmployeeRepository;

import lombok.extern.slf4j.Slf4j;

@RestController
@CrossOrigin
@Slf4j
public class EmployeeController {

	@Autowired
	private EmployeeRepository employeeRepository;

	@PostMapping(ConstantController.EmployeeController.SAVE_EMPLOYEE)
	public void saveEmployee(@RequestBody Employee employee) {
		employeeRepository.save(employee);
	}

	@GetMapping(ConstantController.EmployeeController.GET_EMPLOYEES)
	@ResponseBody
	public List<Employee> getEmployees() {
		return employeeRepository.findAll();
	}

	@GetMapping(ConstantController.EmployeeController.GET_EMPLOYEE)
	@ResponseBody
	public Optional<Employee> getEmployeeById(@RequestParam("id") long id) {
		return employeeRepository.findById(id);
	}

	@DeleteMapping(ConstantController.EmployeeController.DELETE_EMPLOYEE)
	public void deleteEmployee(@RequestParam("id") long id) {
		employeeRepository.deleteById(id);
	}

	@PostMapping(ConstantController.EmployeeController.UPDATE_EMPLOYEE)
	@ResponseBody
	public Employee updateEmployee(@PathVariable("id") long id, @RequestBody Employee employee) {
		if (employeeRepository.findById(id).isPresent()) {
			return employeeRepository.save(employee);
		} else {
			return null;
		}
	}
}