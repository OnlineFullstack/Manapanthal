package com.Manapanthal.ClientManagement.Services;

import com.Manapanthal.ClientManagement.DTO.Responses.ClientResponse;

import java.util.List;

public interface ClientService {
    List<ClientResponse> getAllClientList();
}
