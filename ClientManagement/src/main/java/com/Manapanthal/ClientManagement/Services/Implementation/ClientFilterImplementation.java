package com.Manapanthal.ClientManagement.Services.Implementation;

import com.Manapanthal.ClientManagement.Entities.ClientData.ClientData;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

@Service
public class ClientFilterImplementation {

    public static Specification<ClientData> hasOccupationType(String occupation_type){
        return ((root, query, criteriaBuilder) -> occupation_type==null ? null :
                criteriaBuilder.equal(root.get("careerStudies").get("occupation_type"),occupation_type)
        );
    }

}
