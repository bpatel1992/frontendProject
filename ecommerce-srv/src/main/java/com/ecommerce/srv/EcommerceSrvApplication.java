package com.ecommerce.srv;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories
public class EcommerceSrvApplication {

	public static void main(String[] args) {
		SpringApplication.run(EcommerceSrvApplication.class, args);
	}

}
