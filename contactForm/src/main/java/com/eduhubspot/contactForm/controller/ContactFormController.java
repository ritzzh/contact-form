package com.eduhubspot.contactForm.controller;

import com.eduhubspot.contactForm.model.ContactForm;
import com.eduhubspot.contactForm.service.ContactFormService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@RequestMapping("/api")
public class ContactFormController {

    @Autowired
    private ContactFormService service;

    @PostMapping("/contact")
    public ResponseEntity<Map<String, Object>> submitContactForm(@RequestBody ContactForm contact) {
        Map<String, Object> response = new HashMap<>();
        try {
            String result = service.submitForm(contact);
            response.put("message", result);
            return new ResponseEntity<>(response, HttpStatus.CREATED);
        } catch (Exception e) {
            response.put("error", "Failed to submit form: " + e.getMessage());
            return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/allforms")
    public ResponseEntity<?> getAllContactForms() {
        try {
            List<ContactForm> forms = service.getAllForms();
            if (forms.isEmpty()) {
                return new ResponseEntity<>(Map.of("message", "No contact forms found"), HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<>(forms, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(Map.of("error", "Failed to fetch contact forms: " + e.getMessage()), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Map<String, String>> deleteContactForm(@PathVariable("id") Long id) {
        Map<String, String> response = new HashMap<>();
        try {
            service.deleteForm(id);
            response.put("message", "Contact form deleted successfully");
            return new ResponseEntity<>(response, HttpStatus.OK);
        } catch (Exception e) {
            response.put("error", "Failed to delete contact form: " + e.getMessage());
            return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
