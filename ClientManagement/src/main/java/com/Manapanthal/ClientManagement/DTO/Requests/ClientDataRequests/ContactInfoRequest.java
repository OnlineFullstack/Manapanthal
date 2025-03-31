package com.Manapanthal.ClientManagement.DTO.Requests.ClientDataRequests;

import jakarta.persistence.Embeddable;
import jakarta.persistence.Embedded;
import lombok.Data;

@Data
public class ContactInfoRequest {
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

