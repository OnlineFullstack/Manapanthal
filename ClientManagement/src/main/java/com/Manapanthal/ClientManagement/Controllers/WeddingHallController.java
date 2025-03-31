package com.Manapanthal.ClientManagement.Controllers;

import com.Manapanthal.ClientManagement.APIResponses.BaseResponse;
import com.Manapanthal.ClientManagement.APIResponses.ContentResponse;
import com.Manapanthal.ClientManagement.DTO.Requests.WeddingHallRequest;
import com.Manapanthal.ClientManagement.Enums.ResponseStatus;
import com.Manapanthal.ClientManagement.Services.WeddingHallService;
import com.Manapanthal.ClientManagement.Utilities.EndpointApi;
import com.Manapanthal.ClientManagement.Utilities.ResponseKeys;
import com.Manapanthal.ClientManagement.Utilities.ValidationServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping(EndpointApi.CommonApi)
public class WeddingHallController {

    @Autowired
    private ValidationServices validationServices;
    @Autowired
    private WeddingHallService weddingHallService;

    @PostMapping(EndpointApi.saveWeddingHall)
    public ResponseEntity<Object> saveWeddingHall(@RequestBody WeddingHallRequest weddingHallRequest){

        weddingHallService.saveWeddingHall(weddingHallRequest);
        return ResponseEntity.ok(new BaseResponse(
                ResponseStatus.SUCCESS.getStatus(),
                validationServices.getCommonSuccessCode(),
                validationServices.getWeddingHallSaveMessage()
        ));

    }

    @PutMapping(EndpointApi.updateWeddingHall)
    public ResponseEntity<Object> updateWeddingHall(@RequestBody WeddingHallRequest weddingHallRequest){

        weddingHallService.updateWeddingHall(weddingHallRequest);
        return ResponseEntity.ok(new BaseResponse(
                ResponseStatus.SUCCESS.getStatus(),
                validationServices.getCommonSuccessCode(),
                validationServices.getWeddingHallUpdateMessage()
        ));

    }

    @DeleteMapping(EndpointApi.deleteWeddingHallById)
    public ResponseEntity<Object> deleteWeddingHall(@PathVariable(name = "id") Long id){

        if (!weddingHallService.existByWeddingHallId(id))
            return ResponseEntity.ok(new BaseResponse(
                    ResponseStatus.UNKNOWN.getStatus(),
                    validationServices.getFailureCode(),
                    validationServices.getWeddingHallIdNotFoundMessage()
            ));

        weddingHallService.deleteWeddingHall(id);
        return ResponseEntity.ok(new BaseResponse(
                ResponseStatus.SUCCESS.getStatus(),
                validationServices.getCommonSuccessCode(),
                validationServices.getPhotographyDeleteMessage()
        ));

    }

    @GetMapping(EndpointApi.getWeddingHallById)
    public ResponseEntity<Object> getWeddingHallById(@PathVariable Long id){
        if (!weddingHallService.existByWeddingHallId(id))
            return ResponseEntity.ok(new BaseResponse(
                    ResponseStatus.UNKNOWN.getStatus(),
                    validationServices.getFailureCode(),
                    validationServices.getWeddingHallIdNotFoundMessage()
            ));

        return ResponseEntity.ok(new ContentResponse<>(
                ResponseStatus.SUCCESS.getStatus(),
                validationServices.getCommonSuccessCode(),
                validationServices.getWeddingHallGetMessage(),
                ResponseKeys.WeddingHallDetails,
                weddingHallService.getWeddingHallById(id)
        ));
    }

    @GetMapping(EndpointApi.getWeddingHallList)
    public ResponseEntity<Object> getWeddingHallList(){

        return ResponseEntity.ok(new ContentResponse<>(
                ResponseStatus.SUCCESS.getStatus(),
                validationServices.getCommonSuccessCode(),
                validationServices.getWeddingHallGetMessage(),
                ResponseKeys.WeddingHallDetails,
                weddingHallService.getWeddingHallList()
        ));
    }


}
