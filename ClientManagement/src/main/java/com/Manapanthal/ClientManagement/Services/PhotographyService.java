package com.Manapanthal.ClientManagement.Services;

import com.Manapanthal.ClientManagement.DTO.Requests.PhotographyRequest;
import com.Manapanthal.ClientManagement.DTO.Responses.PhotographyResponse;

import java.util.List;

public interface PhotographyService {
    void savePhotography(PhotographyRequest photographyRequest);

    List<PhotographyResponse> getPhotographyList();

    void updatePhotography(PhotographyRequest photographyRequest);

    void deletePhotography(Long id);

    PhotographyResponse getPhotographyById(Long id);

    boolean existByPhotographyId(Long id);



    boolean existByPhotographyMobile(Long mobile);
}
