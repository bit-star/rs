package com.lazulite.rs.service;

import com.lazulite.rs.domain.AlipayFundAuthOrderAppFreezeModel;
import com.lazulite.rs.repository.AlipayFundAuthOrderAppFreezeModelRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

/**
 * Service Implementation for managing {@link AlipayFundAuthOrderAppFreezeModel}.
 */
@Service
@Transactional
public class AlipayFundAuthOrderAppFreezeModelService {

    private final Logger log = LoggerFactory.getLogger(AlipayFundAuthOrderAppFreezeModelService.class);

    private final AlipayFundAuthOrderAppFreezeModelRepository alipayFundAuthOrderAppFreezeModelRepository;

    public AlipayFundAuthOrderAppFreezeModelService(AlipayFundAuthOrderAppFreezeModelRepository alipayFundAuthOrderAppFreezeModelRepository) {
        this.alipayFundAuthOrderAppFreezeModelRepository = alipayFundAuthOrderAppFreezeModelRepository;
    }

    /**
     * Save a alipayFundAuthOrderAppFreezeModel.
     *
     * @param alipayFundAuthOrderAppFreezeModel the entity to save.
     * @return the persisted entity.
     */
    public AlipayFundAuthOrderAppFreezeModel save(AlipayFundAuthOrderAppFreezeModel alipayFundAuthOrderAppFreezeModel) {
        log.debug("Request to save AlipayFundAuthOrderAppFreezeModel : {}", alipayFundAuthOrderAppFreezeModel);
        return alipayFundAuthOrderAppFreezeModelRepository.save(alipayFundAuthOrderAppFreezeModel);
    }

    /**
     * Get all the alipayFundAuthOrderAppFreezeModels.
     *
     * @param pageable the pagination information.
     * @return the list of entities.
     */
    @Transactional(readOnly = true)
    public Page<AlipayFundAuthOrderAppFreezeModel> findAll(Pageable pageable) {
        log.debug("Request to get all AlipayFundAuthOrderAppFreezeModels");
        return alipayFundAuthOrderAppFreezeModelRepository.findAll(pageable);
    }


    /**
     * Get one alipayFundAuthOrderAppFreezeModel by id.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    @Transactional(readOnly = true)
    public Optional<AlipayFundAuthOrderAppFreezeModel> findOne(Long id) {
        log.debug("Request to get AlipayFundAuthOrderAppFreezeModel : {}", id);
        return alipayFundAuthOrderAppFreezeModelRepository.findById(id);
    }

    /**
     * Delete the alipayFundAuthOrderAppFreezeModel by id.
     *
     * @param id the id of the entity.
     */
    public void delete(Long id) {
        log.debug("Request to delete AlipayFundAuthOrderAppFreezeModel : {}", id);
        alipayFundAuthOrderAppFreezeModelRepository.deleteById(id);
    }
}
