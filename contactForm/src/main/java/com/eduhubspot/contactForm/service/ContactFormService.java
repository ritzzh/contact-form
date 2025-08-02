package com.eduhubspot.contactForm.service;

import com.eduhubspot.contactForm.model.ContactForm;
import com.eduhubspot.contactForm.repository.ContactFormRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ContactFormService {

    @Autowired
    private ContactFormRepository repository;

    @Autowired
    private JdbcTemplate jdbcTemplate;

    public String submitForm(ContactForm contact) {
        return repository.save(contact) > 0 ? "Saved successfully" : "Failed to save";
    }

    public List<ContactForm> getAllForms() {
        String sql = "SELECT * FROM contacts";
        return jdbcTemplate.query(sql, (rs, rowNum) -> {
            ContactForm contact = new ContactForm();
            contact.setId(rs.getInt("id"));
            contact.setName(rs.getString("name"));
            contact.setEmail(rs.getString("email"));
            contact.setLocation(rs.getString("location"));
            contact.setSubject(rs.getString("subject"));
            contact.setMessage(rs.getString("message"));
            contact.setDate(rs.getTimestamp("date").toLocalDateTime());
            return contact;
        });
    }

    public void deleteForm(Long id) {
        if (id == null || id <= 0) {
            throw new IllegalArgumentException("Invalid contact form ID");
        }
        String sql = "DELETE FROM contacts WHERE id = ?";
        jdbcTemplate.update(sql, id);
    }
}
