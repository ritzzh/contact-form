package com.eduhubspot.contactForm.repository;

import com.eduhubspot.contactForm.model.ContactForm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class ContactFormRepository {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    public int save(ContactForm contact) {
        String sql = "INSERT INTO contacts (name, email, location, subject, message) VALUES (?, ?, ?, ?, ?)";
        return jdbcTemplate.update(sql,
            contact.getName(),
            contact.getEmail(),
            contact.getLocation(),
            contact.getSubject(),
            contact.getMessage()
        );
    }
}
