package com.Manapanthal.ClientManagement.Services.Implementation;

import com.Manapanthal.ClientManagement.DTO.Requests.PhotographyRequest;
import com.Manapanthal.ClientManagement.DTO.Responses.PhotographyResponse;
import com.Manapanthal.ClientManagement.Entities.Photography;
import com.Manapanthal.ClientManagement.Entities.ServicePackages;
import com.Manapanthal.ClientManagement.Repositories.PhotographyRepository;
import com.Manapanthal.ClientManagement.Repositories.ServicePackagesRepository;
import com.Manapanthal.ClientManagement.Services.PhotographyService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class PhotographyServiceImpl implements PhotographyService {

    @Autowired
    private PhotographyRepository photographyRepository;
    @Autowired
    private ObjectMapper objectMapper;
    @Autowired
    private ServicePackagesRepository servicePackagesRepository;

    @Override
    public List<PhotographyResponse> getPhotographyList() {

        return photographyRepository.findAll().stream().map(
                photography -> {
                    PhotographyResponse photographyResponse = new PhotographyResponse();
                    BeanUtils.copyProperties(photography,photographyResponse);
                    return photographyResponse;
                }).toList();
    }

    @Override
    public void updatePhotography(PhotographyRequest photographyRequest) {
        List<ServicePackages> servicepackList = new ArrayList<>();
        Photography photography = photographyRepository.getReferenceById(photographyRequest.getId());
        BeanUtils.copyProperties(photographyRequest,photography);
        photographyRequest.getServicePackagesListIds().forEach(
                id-> {
                    servicepackList.add(servicePackagesRepository.getReferenceById(id));
                    photography.setServicePackagesList(servicepackList);
                    photographyRepository.save(photography);
                });

    }

    @Override
    public void deletePhotography(Long id) {
        photographyRepository.deleteById(id);
    }

    @Override
    public PhotographyResponse getPhotographyById(Long id) {
        Photography existingPhotography = photographyRepository.getReferenceById(id);
        PhotographyResponse photographyResponse = new PhotographyResponse();
        BeanUtils.copyProperties(existingPhotography,photographyResponse);
        return photographyResponse;
    }

    @Override
    public boolean existByPhotographyId(Long id) {
        return photographyRepository.existsById(id);
    }

    @Override
    public boolean existByPhotographyMobile(Long mobile) {
        return photographyRepository.existsByMobile(mobile);
    }

    @Override
    public void savePhotography(PhotographyRequest photographyRequest) {
        List<ServicePackages> servicepackList = new ArrayList<>();
        Photography photography = new Photography();
        BeanUtils.copyProperties(photographyRequest, photography);

        photographyRequest.getServicePackagesListIds().forEach(
                id-> {
                    servicepackList.add(servicePackagesRepository.getReferenceById(id));
                    photography.setServicePackagesList(servicepackList);
                    photographyRepository.save(photography);
                });

    }


}
