package com.lazulite.rs.service;

import com.lazulite.rs.domain.Pcr;
import com.lazulite.rs.repository.PcrRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

/**
 * Service Implementation for managing {@link Pcr}.
 */
@Service
@Transactional
public class PcrService {

    private final Logger log = LoggerFactory.getLogger(PcrService.class);

    private final PcrRepository pcrRepository;

    public PcrService(PcrRepository pcrRepository) {
        this.pcrRepository = pcrRepository;
    }

    /**
     * Save a pcr.
     *
     * @param pcr the entity to save.
     * @return the persisted entity.
     */
    public Pcr save(Pcr pcr) {
        log.debug("Request to save Pcr : {}", pcr);
        return pcrRepository.save(pcr);
    }

    /**
     * Get all the pcrs.
     *
     * @param pageable the pagination information.
     * @return the list of entities.
     */
    @Transactional(readOnly = true)
    public Page<Pcr> findAll(Pageable pageable) {
        log.debug("Request to get all Pcrs");
        return pcrRepository.findAll(pageable);
    }


    /**
     * Get one pcr by id.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    @Transactional(readOnly = true)
    public Optional<Pcr> findOne(Long id) {
        log.debug("Request to get Pcr : {}", id);
        return pcrRepository.findById(id);
    }

    /**
     * Delete the pcr by id.
     *
     * @param id the id of the entity.
     */
    public void delete(Long id) {
        log.debug("Request to delete Pcr : {}", id);
        pcrRepository.deleteById(id);
    }
}
