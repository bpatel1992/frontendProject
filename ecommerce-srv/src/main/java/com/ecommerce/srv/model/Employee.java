package com.ecommerce.srv.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Table(name="tbl_employee")
@Data
public class Employee {
	
	@Id
	@GeneratedValue
	private long id;
	private String name;
	private String department;
	private int age;
	private String city;
	private String country;
	private String gender;

}
