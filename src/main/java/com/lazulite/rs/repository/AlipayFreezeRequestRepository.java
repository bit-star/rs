package com.lazulite.rs.repository;

import com.lazulite.rs.domain.AlipayFreezeRequest;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the AlipayFreezeRequest entity.
 */
@SuppressWarnings("unused")
@Repository
public interface AlipayFreezeRequestRepository extends JpaRepository<AlipayFreezeRequest, Long> {

}
