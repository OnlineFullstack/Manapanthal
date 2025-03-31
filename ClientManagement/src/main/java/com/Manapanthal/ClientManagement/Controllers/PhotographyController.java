package com.Manapanthal.ClientManagement.Controllers;

import com.Manapanthal.ClientManagement.APIResponses.BaseResponse;
import com.Manapanthal.ClientManagement.APIResponses.ContentResponse;
import com.Manapanthal.ClientManagement.DTO.Requests.PhotographyRequest;
import com.Manapanthal.ClientManagement.DTO.Responses.PhotographyResponse;
import com.Manapanthal.ClientManagement.Enums.ResponseStatus;
import com.Manapanthal.ClientManagement.Services.PhotographyService;
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
public class PhotographyController {

    @Autowired
    private PhotographyService photographyService;
    @Autowired
    private ValidationServices validationServices;

    @GetMapping(EndpointApi.getPhotographyList)
    public ResponseEntity<Object> getPhotographyList(){

        List<PhotographyResponse> photographyResponseList =  photographyService.getPhotographyList();
        return ResponseEntity.ok(new ContentResponse<>(
                ResponseStatus.SUCCESS.getStatus(),
                validationServices.getCommonSuccessCode(),
                validationServices.getPhotographyGetMessage(),
                ResponseKeys.PhotographyDetails,
                photographyResponseList
        ));

    }

    @GetMapping(EndpointApi.getPhotographyById)
    public ResponseEntity<Object> getPhotographyById(@PathVariable(name = "id") Long id){

        if (!photographyService.existByPhotographyId(id))
            return ResponseEntity.ok(new BaseResponse(
                    ResponseStatus.UNKNOWN.getStatus(),
                    validationServices.getFailureCode(),
                    validationServices.getPhotographyIdNotFoundMessage()
            ));

        return ResponseEntity.ok(new ContentResponse<>(
                ResponseStatus.SUCCESS.getStatus(),
                validationServices.getCommonSuccessCode(),
                validationServices.getPhotographyGetMessage(),
                ResponseKeys.PhotographyDetail,
                photographyService.getPhotographyById(id)
        ));

    }

    @PostMapping(EndpointApi.savePhotography)
    public ResponseEntity<Object> savePhotography(@RequestBody PhotographyRequest photographyRequest){

        if (photographyService.existByPhotographyMobile(photographyRequest.getMobile()))
            return ResponseEntity.ok(new BaseResponse(
                    ResponseStatus.FAILURE.getStatus(),
                    validationServices.getFailureCode(),
                    validationServices.getPhotographyMobileAlreadyExists()
            ));

        photographyService.savePhotography(photographyRequest);
        return ResponseEntity.ok(new BaseResponse(
                ResponseStatus.SUCCESS.getStatus(),
                validationServices.getCommonSuccessCode(),
                validationServices.getPhotographySaveMessage()
        ));

    }

    @PutMapping(EndpointApi.updatePhotography)
    public ResponseEntity<Object> updatePhotography(@RequestBody PhotographyRequest photographyRequest){
        if (!photographyService.existByPhotographyId(photographyRequest.getId()))
            return ResponseEntity.ok(new BaseResponse(
                    ResponseStatus.UNKNOWN.getStatus(),
                    validationServices.getFailureCode(),
                    validationServices.getPhotographyIdNotFoundMessage()
            ));

        photographyService.updatePhotography(photographyRequest);
        return ResponseEntity.ok(new BaseResponse(
                ResponseStatus.SUCCESS.getStatus(),
                validationServices.getCommonSuccessCode(),
                validationServices.getPhotographyUpdateMessage()

        ));

    }

    @DeleteMapping(EndpointApi.deletePhotography)
    public ResponseEntity<Object> deletePhotography(@PathVariable(name = "id") Long id){

        if (!photographyService.existByPhotographyId(id))
            return ResponseEntity.ok(new BaseResponse(
                    ResponseStatus.UNKNOWN.getStatus(),
                    validationServices.getFailureCode(),
                    validationServices.getPhotographyIdNotFoundMessage()
            ));

        photographyService.deletePhotography(id);
        return ResponseEntity.ok(new BaseResponse(
                ResponseStatus.SUCCESS.getStatus(),
                validationServices.getCommonSuccessCode(),
                validationServices.getPhotographyDeleteMessage()

        ));

    }

}
