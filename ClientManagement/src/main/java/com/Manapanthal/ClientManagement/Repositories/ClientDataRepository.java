package com.Manapanthal.ClientManagement.Repositories;

import com.Manapanthal.ClientManagement.Entities.ClientData.ClientData;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClientDataRepository extends JpaRepository<ClientData,Long> {
}
