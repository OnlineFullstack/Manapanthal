package com.Manapanthal.ClientManagement.DTO.Responses;

import com.Manapanthal.ClientManagement.Entities.ServicePackages;
import lombok.Data;

import java.util.Currency;
import java.util.List;
import java.util.Map;

@Data
public class PhotographyResponse {
    private Long id;
    private String photographerName;
    private Long mobile;
    private String location;
    private List<ServicePackages> servicePackagesList;
}
