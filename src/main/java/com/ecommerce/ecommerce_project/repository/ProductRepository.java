package com.ecommerce.ecommerce_project.repository;

import com.ecommerce.ecommerce_project.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
    // JpaRepository already gives CRUD methods, no need to write anything here
}
