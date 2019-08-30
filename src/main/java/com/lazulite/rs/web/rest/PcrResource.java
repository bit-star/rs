package com.lazulite.rs.web.rest;

import com.lazulite.rs.domain.Pcr;
import com.lazulite.rs.service.PcrService;
import com.lazulite.rs.web.rest.errors.BadRequestAlertException;

import io.github.jhipster.web.util.HeaderUtil;
import io.github.jhipster.web.util.PaginationUtil;
import io.github.jhipster.web.util.ResponseUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;

import java.util.List;
import java.util.Optional;

/**
 * REST controller for managing {@link com.lazulite.rs.domain.Pcr}.
 */
@RestController
@RequestMapping("/api")
public class PcrResource {

    private final Logger log = LoggerFactory.getLogger(PcrResource.class);

    private static final String ENTITY_NAME = "pcr";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final PcrService pcrService;

    public PcrResource(PcrService pcrService) {
        this.pcrService = pcrService;
    }

    /**
     * {@code POST  /pcrs} : Create a new pcr.
     *
     * @param pcr the pcr to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new pcr, or with status {@code 400 (Bad Request)} if the pcr has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/pcrs")
    public ResponseEntity<Pcr> createPcr(@RequestBody Pcr pcr) throws URISyntaxException {
        log.debug("REST request to save Pcr : {}", pcr);
        if (pcr.getId() != null) {
            throw new BadRequestAlertException("A new pcr cannot already have an ID", ENTITY_NAME, "idexists");
        }
        Pcr result = pcrService.save(pcr);
        return ResponseEntity.created(new URI("/api/pcrs/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /pcrs} : Updates an existing pcr.
     *
     * @param pcr the pcr to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated pcr,
     * or with status {@code 400 (Bad Request)} if the pcr is not valid,
     * or with status {@code 500 (Internal Server Error)} if the pcr couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/pcrs")
    public ResponseEntity<Pcr> updatePcr(@RequestBody Pcr pcr) throws URISyntaxException {
        log.debug("REST request to update Pcr : {}", pcr);
        if (pcr.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        Pcr result = pcrService.save(pcr);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, pcr.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /pcrs} : get all the pcrs.
     *

     * @param pageable the pagination information.

     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of pcrs in body.
     */
    @GetMapping("/pcrs")
    public ResponseEntity<List<Pcr>> getAllPcrs(Pageable pageable) {
        log.debug("REST request to get a page of Pcrs");
        Page<Pcr> page = pcrService.findAll(pageable);
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(ServletUriComponentsBuilder.fromCurrentRequest(), page);
        return ResponseEntity.ok().headers(headers).body(page.getContent());
    }

    /**
     * {@code GET  /pcrs/:id} : get the "id" pcr.
     *
     * @param id the id of the pcr to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the pcr, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/pcrs/{id}")
    public ResponseEntity<Pcr> getPcr(@PathVariable Long id) {
        log.debug("REST request to get Pcr : {}", id);
        Optional<Pcr> pcr = pcrService.findOne(id);
        return ResponseUtil.wrapOrNotFound(pcr);
    }

    /**
     * {@code DELETE  /pcrs/:id} : delete the "id" pcr.
     *
     * @param id the id of the pcr to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/pcrs/{id}")
    public ResponseEntity<Void> deletePcr(@PathVariable Long id) {
        log.debug("REST request to delete Pcr : {}", id);
        pcrService.delete(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString())).build();
    }
}
