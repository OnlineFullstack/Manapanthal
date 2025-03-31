package com.Manapanthal.ClientManagement.Services.Implementation;

import com.Manapanthal.ClientManagement.APIResponses.PaginatedResponse;
import com.Manapanthal.ClientManagement.DTO.Requests.ClientDataRequests.ClientRequest;
import com.Manapanthal.ClientManagement.DTO.Responses.ClientResponse;
import com.Manapanthal.ClientManagement.Entities.ClientData.ClientData;
import com.Manapanthal.ClientManagement.Repositories.ClientDataRepository;
import com.Manapanthal.ClientManagement.Services.ClientService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ClientServiceImplementation implements ClientService {

    @Autowired
    private ClientDataRepository clientDataRepository;

    @Override
    public List<ClientResponse> getAllClientList() {


        int page = 1;
        int size = 10;
        String occupationType = "Doctor";
        Pageable pageable = PageRequest.of(page, size);

        Specification<ClientData> specification = ClientFilterImplementation.hasOccupationType(occupationType);

        Page<ClientData> clientDataPage = clientDataRepository.findAll(specification, pageable);

        List<ClientResponse> clientResponses = clientDataPage.getContent().stream()
                .map(client -> {
                    ClientResponse clientResponse = new ClientResponse();
                    BeanUtils.copyProperties(client, clientResponse);
                    return clientResponse;
                })
                .toList();


        PaginatedResponse.Pagination pagination = new PaginatedResponse.Pagination(
                clientDataPage.getNumber() + 1,
                clientDataPage.getSize(),
                clientDataPage.getTotalPages(),
                clientDataPage.getTotalElements()
        );

        List<ClientResponse> clientResponseList = new ArrayList<>();

        return clientResponseList;
    }

    @Override
    public void saveClient(ClientRequest clientRequest) {
        ClientData clientData = new ClientData();
        BeanUtils.copyProperties(clientRequest,clientData);
        clientDataRepository.save(clientData);
    }

    @Override
    public void updateClient(ClientRequest clientRequest) {
        ClientData client = clientDataRepository.getReferenceById(clientRequest.getId());
        BeanUtils.copyProperties(clientRequest,client);
        clientDataRepository.save(client);
    }

    @Override
    public void deleteClient(Long id) {
        clientDataRepository.deleteById(id);
    }

    @Override
    public ClientResponse getClientById(Long id) {
        ClientResponse clientResponse = new ClientResponse();
        ClientData clientData = clientDataRepository.getReferenceById(id);
        BeanUtils.copyProperties(clientData,clientResponse);
        return clientResponse;
    }

    @Override
    public boolean existByClientId(Long id) {
        return clientDataRepository.existsById(id);
    }

    @Override
    public boolean existByMobileClientIdNot(Long id, String mobile) {

        return  clientDataRepository.existsByContactInfo_MobileAndIdNot(mobile,id);
    }


}
