package com.ecommerce.ecommerce_project.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ViewController {

    // serve template at "/" and "/index"
    @GetMapping({"/", "/index"})
    public String index() {
        return "index";   // resolves to src/main/resources/templates/index.html
    }
}
