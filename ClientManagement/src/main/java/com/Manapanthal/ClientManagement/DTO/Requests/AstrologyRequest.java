package com.Manapanthal.ClientManagement.DTO.Requests;

import lombok.Data;

import java.sql.Timestamp;

@Data
public class AstrologyRequest{

    private Long id;
    private String rasi;
    private String natchathiram;
    private Timestamp dob_dot;
    private String birth_location;
}
