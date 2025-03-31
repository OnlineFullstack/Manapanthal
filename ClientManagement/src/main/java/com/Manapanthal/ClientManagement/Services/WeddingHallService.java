package com.Manapanthal.ClientManagement.Services;

import com.Manapanthal.ClientManagement.DTO.Requests.WeddingHallRequest;
import com.Manapanthal.ClientManagement.DTO.Responses.WeddingHallResponse;

import java.util.List;

public interface WeddingHallService {
    void saveWeddingHall(WeddingHallRequest weddingHallRequest);

    void updateWeddingHall(WeddingHallRequest weddingHallRequest);

    void deleteWeddingHall(Long id);

    WeddingHallResponse getWeddingHallById(Long id);

    List<WeddingHallResponse> getWeddingHallList();

    boolean existByWeddingHallId(Long id);
}
