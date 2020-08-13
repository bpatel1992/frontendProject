package com.ecommerce.srv.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Table(name = "tbl_cart")
@Data
public class Cart {

	@Id
	private long cartId;
	private String productName;
	private long productPrice;
}
