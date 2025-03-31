package com.Manapanthal.ClientManagement.DTO.Requests;

import com.Manapanthal.ClientManagement.Entities.ServicePackages;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import lombok.Data;

import java.util.Currency;
import java.util.List;
import java.util.Map;

@Data
public class PhotographyRequest {
    private Long id;
    private String photographerName;
    private Long mobile;
    private String location;
    private List<Long> servicePackagesListIds;
}
