package com.ecommerce.srv.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ecommerce.srv.model.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee	, Long> {

}
