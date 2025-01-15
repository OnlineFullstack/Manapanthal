package com.Manapanthal.ClientManagement.DTO.Responses;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.time.LocalTime;

@Getter
@Setter
public class ClientResponse {
    private Long id;
    private String firstName;
    private String lastName;
    private LocalDate date_of_birth;
    private LocalTime time_of_birth;
    private Long age;
    private String address;
    private String city;
    private String email;
    private String phoneNumber;
    private String occupation;
    private String annual_salary_range;
    private String smoker_type;
    private boolean drinker_type;
    private String food_type;
}
