package com.lazulite.rs.repository;

import com.lazulite.rs.domain.Pcr;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the Pcr entity.
 */
@SuppressWarnings("unused")
@Repository
public interface PcrRepository extends JpaRepository<Pcr, Long> {

}
