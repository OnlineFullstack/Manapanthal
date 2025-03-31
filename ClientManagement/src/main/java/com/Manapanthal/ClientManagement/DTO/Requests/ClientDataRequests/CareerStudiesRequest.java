package com.Manapanthal.ClientManagement.DTO.Requests.ClientDataRequests;

import lombok.Data;

@Data
public class CareerStudiesRequest {

    private Long id;
    private String occupation;
    private String occupation_type;
    private String annual_salary;
    private String higher_studies;
}
