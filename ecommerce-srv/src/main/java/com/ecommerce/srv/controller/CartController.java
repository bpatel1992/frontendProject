package com.ecommerce.srv.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.srv.model.Cart;

@RestController
public class CartController {

	@GetMapping(ConstantController.CartController.CART_DETAILS)
	public Cart getCartDetails() {
		return null;
	}

}
