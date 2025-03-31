package com.Manapanthal.ClientManagement.DTO.Requests;

import lombok.Data;

@Data
public class WeddingHallRequest {
    private Long id;
    private String ownerName;
    private Long phone;
    private String location;
}
