package com.ecommerce.ecommerce_project.controller;

import com.ecommerce.ecommerce_project.entity.Product;
import com.ecommerce.ecommerce_project.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/products")
public class ProductController {

    @Autowired
    private ProductRepository productRepository;

    // Show product list + form
    @GetMapping
    public String getAllProducts(Model model) {
        model.addAttribute("products", productRepository.findAll());
        model.addAttribute("product", new Product()); // empty form for Add
        return "products";
    }

    // Save new OR updated product
    @PostMapping
    public String saveProduct(@ModelAttribute Product product) {
        productRepository.save(product); // if id exists → update, else → insert
        return "redirect:/products";
    }

    // Edit product
    @GetMapping("/edit/{id}")
    public String editProduct(@PathVariable Long id, Model model) {
        Product product = productRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Product not found"));
        model.addAttribute("product", product); // pre-fill form
        model.addAttribute("products", productRepository.findAll()); // keep list
        return "products";
    }

    // Delete product
    @GetMapping("/delete/{id}")
    public String deleteProduct(@PathVariable Long id) {
        productRepository.deleteById(id);
        return "redirect:/products";
    }
}