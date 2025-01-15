package com.Manapanthal.ClientManagement.DTO.Requests;

import lombok.Data;

import java.util.List;

@Data
public class LifestyleRequest{

    private Long id;
    private List<String> hobbies;
    private List<String> personal_interest;
    private List<String> expectations;
    private List<String> habits;
}


