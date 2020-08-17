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
		public static final String FAILURE_MESSAGE = "Fail -> Email is already in use!";
		public static final String SUCCESS_MESSAGE = "Success -> User registered successfully!";

		private UserAuthorization() {
		}
	}

	public static class EmployeeController {
		public static final String SAVE_EMPLOYEE = "/save-employee";
		public static final String GET_EMPLOYEES = "/get-employees";
		public static final String GET_EMPLOYEE = "/get-employee";
		public static final String DELETE_EMPLOYEE = "/delete-employee";
		public static final String UPDATE_EMPLOYEE = "/update-employee";

		private EmployeeController() {
		}
	}

}
