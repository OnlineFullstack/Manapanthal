package com.Manapanthal.ClientManagement.DTO.Requests;

import lombok.Data;

@Data
public class PersonalDetailsRequest{
    private Long id;
    private String full_name;
    private String mother_name;
    private String first_name;
    private String last_name;
    private Long age;
    private String gender;
    private String marital_status;
    private Double height;
    private Integer num_of_siblings;
    private String religion;
    private String caste;
    private String language;
    private String bio;

}
