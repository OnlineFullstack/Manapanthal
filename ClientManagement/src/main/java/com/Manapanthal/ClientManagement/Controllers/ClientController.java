package com.Manapanthal.ClientManagement.Controllers;

import com.Manapanthal.ClientManagement.APIResponses.BaseResponse;
import com.Manapanthal.ClientManagement.APIResponses.ContentResponse;
import com.Manapanthal.ClientManagement.DTO.Requests.ClientDataRequests.ClientRequest;
import com.Manapanthal.ClientManagement.DTO.Responses.ClientResponse;
import com.Manapanthal.ClientManagement.Enums.ResponseStatus;
import com.Manapanthal.ClientManagement.Services.ClientService;
import com.Manapanthal.ClientManagement.Utilities.EndpointApi;
import com.Manapanthal.ClientManagement.Utilities.ResponseKeys;
import com.Manapanthal.ClientManagement.Utilities.ValidationServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping(EndpointApi.CommonApi)
public class ClientController {
    @Autowired
    private ClientService clientService;
    @Autowired
    private ValidationServices validationServices;

    @GetMapping(EndpointApi.GetAllClients)
    public ResponseEntity<Object> getAllClientList(){
        List<ClientResponse> clientResponseList = clientService.getAllClientList();
        return ResponseEntity.ok(clientResponseList);
    }

    @GetMapping(EndpointApi.getClientById)
    public ResponseEntity<Object> getClientById(@PathVariable Long id){

        if(clientService.existByClientId(id))
            return ResponseEntity.ok(new BaseResponse(
                    ResponseStatus.UNKNOWN.getStatus(),
                    validationServices.getFailureCode(),
                    validationServices.getClientIdNotFoundMessage()));

        return ResponseEntity.ok(new ContentResponse<>(
                ResponseStatus.SUCCESS.getStatus(),
                validationServices.getCommonSuccessCode(),
                validationServices.getClientGetMessage(),
                ResponseKeys.PersonalDetails,
                clientService.getClientById(id)));
    }

    @PostMapping(EndpointApi.saveClient)
    public ResponseEntity<Object> saveClient(@RequestBody ClientRequest clientRequest){

        clientService.saveClient(clientRequest);
        return ResponseEntity.ok(new BaseResponse(
                ResponseStatus.SUCCESS.getStatus(),
                validationServices.getCommonSuccessCode(),
                validationServices.getClientSaveMessage()));

    }

    @PutMapping(EndpointApi.saveClient)
    public ResponseEntity<Object> updateClient(@RequestBody ClientRequest clientRequest){
        if(!clientService.existByClientId(clientRequest.getId()))
            return ResponseEntity.ok(new BaseResponse(
                    ResponseStatus.UNKNOWN.getStatus(),
                    validationServices.getFailureCode(),
                    validationServices.getClientIdNotFoundMessage()));

        if (clientService.existByMobileClientIdNot(clientRequest.getId(),clientRequest.getContactInfo().getMobile()))
            return ResponseEntity.ok(new BaseResponse(
                    ResponseStatus.FAILURE.getStatus(),
                    validationServices.getFailureCode(),
                    validationServices.getMobileAlreadyExistsMessage()));

        clientService.updateClient(clientRequest);

        return ResponseEntity.ok(new BaseResponse(
                ResponseStatus.SUCCESS.getStatus(),
                validationServices.getCommonSuccessCode(),
                validationServices.getClientUpdateMessage()));

    }

    @DeleteMapping(EndpointApi.deleteClient)
    public ResponseEntity<Object> deleteClient(@PathVariable Long id){

        if(clientService.existByClientId(id))
            return ResponseEntity.ok(new BaseResponse(
                    ResponseStatus.UNKNOWN.getStatus(),
                    validationServices.getFailureCode(),
                    validationServices.getClientIdNotFoundMessage()));

        clientService.deleteClient(id);
        return ResponseEntity.ok(new BaseResponse(
                ResponseStatus.SUCCESS.getStatus(),
                validationServices.getCommonSuccessCode(),
                validationServices.getClientDeleteMessage()));

    }
}
