package com.lazulite.rs.repository;

import com.lazulite.rs.domain.AlipayFreezeResponse;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the AlipayFreezeResponse entity.
 */
@SuppressWarnings("unused")
@Repository
public interface AlipayFreezeResponseRepository extends JpaRepository<AlipayFreezeResponse, Long> {

}
