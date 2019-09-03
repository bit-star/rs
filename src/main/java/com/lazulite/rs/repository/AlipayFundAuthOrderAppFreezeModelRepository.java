package com.lazulite.rs.repository;

import com.lazulite.rs.domain.AlipayFundAuthOrderAppFreezeModel;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the AlipayFundAuthOrderAppFreezeModel entity.
 */
@SuppressWarnings("unused")
@Repository
public interface AlipayFundAuthOrderAppFreezeModelRepository extends JpaRepository<AlipayFundAuthOrderAppFreezeModel, Long> {

}
