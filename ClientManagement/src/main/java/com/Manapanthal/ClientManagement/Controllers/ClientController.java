package com.Manapanthal.ClientManagement.Controllers;

import com.Manapanthal.ClientManagement.DTO.Responses.ClientResponse;
import com.Manapanthal.ClientManagement.Services.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
public class ClientController {
    @Autowired
    private ClientService clientService;

    @GetMapping("/getAll")
    public ResponseEntity<Object> getAllClientList(){
        List<ClientResponse> clientResponseList = clientService.getAllClientList();
        return ResponseEntity.ok(clientResponseList);
    }
}
