package com.lazulite.rs.repository;

import com.lazulite.rs.domain.AlipayUser;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the AlipayUser entity.
 */
@SuppressWarnings("unused")
@Repository
public interface AlipayUserRepository extends JpaRepository<AlipayUser, Long> {

}
