package com.Manapanthal.ClientManagement.Services;

import com.Manapanthal.ClientManagement.DTO.Requests.ClientDataRequests.ClientRequest;
import com.Manapanthal.ClientManagement.DTO.Responses.ClientResponse;

import java.util.List;

public interface ClientService {
    List<ClientResponse> getAllClientList();

    void saveClient(ClientRequest clientRequest);

    void updateClient(ClientRequest clientRequest);

    void deleteClient(Long id);

    ClientResponse getClientById(Long id);

    boolean existByClientId(Long id);

    boolean existByMobileClientIdNot(Long id, String mobile);
}
