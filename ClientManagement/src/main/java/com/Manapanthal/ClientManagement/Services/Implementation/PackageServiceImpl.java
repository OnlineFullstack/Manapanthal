package com.Manapanthal.ClientManagement.Services.Implementation;

import com.Manapanthal.ClientManagement.Entities.ServicePackages;
import com.Manapanthal.ClientManagement.Repositories.ServicePackagesRepository;
import com.Manapanthal.ClientManagement.Services.PackageService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class PackageServiceImpl implements PackageService {

    @Autowired
    private ServicePackagesRepository servicePackagesRepository;
    @Autowired
    private ObjectMapper objectMapper;


    @Override
    public void savePackage(Map<String, Object> packageRequest) {
        ServicePackages packages = objectMapper.convertValue(packageRequest,ServicePackages.class);
        servicePackagesRepository.save(packages);
    }

    @Override
    public Object getPackageList() {
        return servicePackagesRepository.findAll();
    }
}
