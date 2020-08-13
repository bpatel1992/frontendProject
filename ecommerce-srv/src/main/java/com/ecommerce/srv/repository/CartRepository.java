package com.ecommerce.srv.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ecommerce.srv.model.Cart;

@Repository
public interface CartRepository extends JpaRepository<Cart, Long>{

}
