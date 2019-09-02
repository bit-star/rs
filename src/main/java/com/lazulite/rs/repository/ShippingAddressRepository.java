package com.lazulite.rs.repository;

import com.lazulite.rs.domain.ShippingAddress;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Spring Data  repository for the ShippingAddress entity.
 */
@SuppressWarnings("unused")
@Repository
public interface ShippingAddressRepository extends JpaRepository<ShippingAddress, Long> {

    @Query("select shippingAddress from ShippingAddress shippingAddress where shippingAddress.user.login = ?#{principal.username}")
    List<ShippingAddress> findByUserIsCurrentUser();

}
