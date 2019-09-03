package com.lazulite.rs.service;

import com.lazulite.rs.domain.AlipayFundAuthOrderAppFreezeResponse;
import com.lazulite.rs.repository.AlipayFundAuthOrderAppFreezeResponseRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

/**
 * Service Implementation for managing {@link AlipayFundAuthOrderAppFreezeResponse}.
 */
@Service
@Transactional
public class AlipayFundAuthOrderAppFreezeResponseService {

    private final Logger log = LoggerFactory.getLogger(AlipayFundAuthOrderAppFreezeResponseService.class);

    private final AlipayFundAuthOrderAppFreezeResponseRepository alipayFundAuthOrderAppFreezeResponseRepository;

    public AlipayFundAuthOrderAppFreezeResponseService(AlipayFundAuthOrderAppFreezeResponseRepository alipayFundAuthOrderAppFreezeResponseRepository) {
        this.alipayFundAuthOrderAppFreezeResponseRepository = alipayFundAuthOrderAppFreezeResponseRepository;
    }

    /**
     * Save a alipayFundAuthOrderAppFreezeResponse.
     *
     * @param alipayFundAuthOrderAppFreezeResponse the entity to save.
     * @return the persisted entity.
     */
    public AlipayFundAuthOrderAppFreezeResponse save(AlipayFundAuthOrderAppFreezeResponse alipayFundAuthOrderAppFreezeResponse) {
        log.debug("Request to save AlipayFundAuthOrderAppFreezeResponse : {}", alipayFundAuthOrderAppFreezeResponse);
        return alipayFundAuthOrderAppFreezeResponseRepository.save(alipayFundAuthOrderAppFreezeResponse);
    }

    /**
     * Get all the alipayFundAuthOrderAppFreezeResponses.
     *
     * @param pageable the pagination information.
     * @return the list of entities.
     */
    @Transactional(readOnly = true)
    public Page<AlipayFundAuthOrderAppFreezeResponse> findAll(Pageable pageable) {
        log.debug("Request to get all AlipayFundAuthOrderAppFreezeResponses");
        return alipayFundAuthOrderAppFreezeResponseRepository.findAll(pageable);
    }


    /**
     * Get one alipayFundAuthOrderAppFreezeResponse by id.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    @Transactional(readOnly = true)
    public Optional<AlipayFundAuthOrderAppFreezeResponse> findOne(Long id) {
        log.debug("Request to get AlipayFundAuthOrderAppFreezeResponse : {}", id);
        return alipayFundAuthOrderAppFreezeResponseRepository.findById(id);
    }

    /**
     * Delete the alipayFundAuthOrderAppFreezeResponse by id.
     *
     * @param id the id of the entity.
     */
    public void delete(Long id) {
        log.debug("Request to delete AlipayFundAuthOrderAppFreezeResponse : {}", id);
        alipayFundAuthOrderAppFreezeResponseRepository.deleteById(id);
    }
}
