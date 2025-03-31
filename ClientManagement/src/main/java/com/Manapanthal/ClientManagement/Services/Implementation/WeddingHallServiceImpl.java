package com.Manapanthal.ClientManagement.Services.Implementation;

import com.Manapanthal.ClientManagement.DTO.Requests.WeddingHallRequest;
import com.Manapanthal.ClientManagement.DTO.Responses.WeddingHallResponse;
import com.Manapanthal.ClientManagement.Entities.WeddingHall;
import com.Manapanthal.ClientManagement.Repositories.WeddingHallRepository;
import com.Manapanthal.ClientManagement.Services.WeddingHallService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class WeddingHallServiceImpl implements WeddingHallService {
    @Autowired
    private WeddingHallRepository weddingHallRepository;
    @Autowired
    private ObjectMapper objectMapper;

    @Override
    public void saveWeddingHall(WeddingHallRequest weddingHallRequest) {
        WeddingHall weddingHall = new WeddingHall();
        BeanUtils.copyProperties(weddingHallRequest,weddingHall);
        weddingHallRepository.save(weddingHall);
    }

    @Override
    public void updateWeddingHall(WeddingHallRequest weddingHallRequest) {

        WeddingHall weddingHall = weddingHallRepository.getReferenceById(weddingHallRequest.getId());
        BeanUtils.copyProperties(weddingHallRequest,weddingHall);
        weddingHallRepository.save(weddingHall);
    }

    @Override
    public void deleteWeddingHall(Long id) {
        weddingHallRepository.deleteById(id);
    }

    @Override
    public WeddingHallResponse getWeddingHallById(Long id) {
        return objectMapper.convertValue(weddingHallRepository.getReferenceById(id),
                WeddingHallResponse.class);
    }

    @Override
    public List<WeddingHallResponse> getWeddingHallList() {
        return weddingHallRepository.findAll().stream().map(
                weddingHall -> {
                    WeddingHallResponse weddingHallResponse = new WeddingHallResponse();
                    BeanUtils.copyProperties(weddingHall,weddingHallResponse);
                    return weddingHallResponse;
                }
        ).collect(Collectors.toList());
    }

    @Override
    public boolean existByWeddingHallId(Long id) {
        return weddingHallRepository.existsById(id);
    }


}
