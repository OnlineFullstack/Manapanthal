package com.Manapanthal.ClientManagement.Repositories;

import com.Manapanthal.ClientManagement.Entities.Photography;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PhotographyRepository extends JpaRepository<Photography,Long> {
    boolean existsByMobileAndIdNot(Long mobile, Long id);

    boolean existsByMobile(Long mobile);
}
