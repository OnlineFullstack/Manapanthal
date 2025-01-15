package com.Manapanthal.ClientManagement.Services.Implementation;

import com.Manapanthal.ClientManagement.DTO.Responses.ClientResponse;
import com.Manapanthal.ClientManagement.Repositories.ClientDataRepository;
import com.Manapanthal.ClientManagement.Services.ClientService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ClientServiceImplementation implements ClientService {

    @Autowired
    private ClientDataRepository clientDataRepository;

    @Override
    public List<ClientResponse> getAllClientList() {
        return clientDataRepository.findAll().stream().map(
              client -> {
                  ClientResponse clientResponse = new ClientResponse();
                  BeanUtils.copyProperties(client,clientResponse);
                  return clientResponse;
              }
        ).collect(Collectors.toList());
    }
}
