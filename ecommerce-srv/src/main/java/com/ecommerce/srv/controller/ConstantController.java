package com.ecommerce.srv.controller;

public class ConstantController {

	public static class CartController {
		public static final String CART_DETAILS = "cart-details";

		private CartController() {
		}
	}

	public static class UserAuthorization {
		public static final String AUTH = "/api/auth";
		public static final String SIGN_IN = "/signin";
		public static final String SIGN_UP = "/signup";

		private UserAuthorization() {
		}

	}

}
