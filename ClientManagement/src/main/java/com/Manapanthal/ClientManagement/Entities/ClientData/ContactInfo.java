package com.Manapanthal.ClientManagement.Entities.ClientData;

import com.Manapanthal.ClientManagement.Utilities.DateTimeGenerate;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class ContactInfo extends DateTimeGenerate {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String mobile;
    private String mobile_country_code;
    private Long otp;
    private String email;
    private String house_number;
    private String home;
    private String lane;
    private String city;
    private String country;
}

