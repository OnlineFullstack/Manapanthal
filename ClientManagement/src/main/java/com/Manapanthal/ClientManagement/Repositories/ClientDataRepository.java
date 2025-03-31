package com.Manapanthal.ClientManagement.Repositories;

import com.Manapanthal.ClientManagement.Entities.ClientData.ClientData;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface ClientDataRepository extends JpaRepository<ClientData,Long>{

    Page<ClientData> findAll(Specification<ClientData> specification, Pageable pageable);

    boolean existsByContactInfo_MobileAndIdNot(String mobile,Long id);
}
