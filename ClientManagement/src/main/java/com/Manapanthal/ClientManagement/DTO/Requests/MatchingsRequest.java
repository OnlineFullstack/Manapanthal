package com.Manapanthal.ClientManagement.DTO.Requests;

import lombok.Data;

import java.util.List;

@Data
public class MatchingsRequest{

    private Long id;
    private List<String> interest_sent;
}

