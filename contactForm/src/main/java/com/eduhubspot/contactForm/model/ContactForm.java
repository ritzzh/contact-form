package com.eduhubspot.contactForm.model;

import lombok.Data;
import java.time.LocalDateTime;

@Data
public class ContactForm {
    private int id;
    private String name;
    private String email;
    private String location;
    private String subject;
    private String message;
    private LocalDateTime date; 
}
