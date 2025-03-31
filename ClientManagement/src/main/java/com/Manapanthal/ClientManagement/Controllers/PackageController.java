package com.Manapanthal.ClientManagement.Controllers;

import com.Manapanthal.ClientManagement.Services.PackageService;
import com.Manapanthal.ClientManagement.Utilities.EndpointApi;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@CrossOrigin
@RequestMapping(EndpointApi.CommonApi)
public class PackageController {

    @Autowired
    private PackageService packageService;

    @PostMapping(EndpointApi.savePackage)
    public ResponseEntity<Object> savePackage(@RequestBody Map<String,Object> packageRequest){
        packageService.savePackage(packageRequest);
        return ResponseEntity.ok("Package Saved");
    }

    @GetMapping(EndpointApi.getPackageList)
    public ResponseEntity<Object> getPackageList(){

        return ResponseEntity.ok(packageService.getPackageList());
    }

}
