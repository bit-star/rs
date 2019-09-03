package com.lazulite.rs.web.rest;

import com.lazulite.rs.domain.AlipayFundAuthOrderAppFreezeResponse;
import com.lazulite.rs.service.AlipayFundAuthOrderAppFreezeResponseService;
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
 * REST controller for managing {@link com.lazulite.rs.domain.AlipayFundAuthOrderAppFreezeResponse}.
 */
@RestController
@RequestMapping("/api")
public class AlipayFundAuthOrderAppFreezeResponseResource {

    private final Logger log = LoggerFactory.getLogger(AlipayFundAuthOrderAppFreezeResponseResource.class);

    private static final String ENTITY_NAME = "alipayFundAuthOrderAppFreezeResponse";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final AlipayFundAuthOrderAppFreezeResponseService alipayFundAuthOrderAppFreezeResponseService;

    public AlipayFundAuthOrderAppFreezeResponseResource(AlipayFundAuthOrderAppFreezeResponseService alipayFundAuthOrderAppFreezeResponseService) {
        this.alipayFundAuthOrderAppFreezeResponseService = alipayFundAuthOrderAppFreezeResponseService;
    }

    /**
     * {@code POST  /alipay-fund-auth-order-app-freeze-responses} : Create a new alipayFundAuthOrderAppFreezeResponse.
     *
     * @param alipayFundAuthOrderAppFreezeResponse the alipayFundAuthOrderAppFreezeResponse to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new alipayFundAuthOrderAppFreezeResponse, or with status {@code 400 (Bad Request)} if the alipayFundAuthOrderAppFreezeResponse has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/alipay-fund-auth-order-app-freeze-responses")
    public ResponseEntity<AlipayFundAuthOrderAppFreezeResponse> createAlipayFundAuthOrderAppFreezeResponse(@RequestBody AlipayFundAuthOrderAppFreezeResponse alipayFundAuthOrderAppFreezeResponse) throws URISyntaxException {
        log.debug("REST request to save AlipayFundAuthOrderAppFreezeResponse : {}", alipayFundAuthOrderAppFreezeResponse);
        if (alipayFundAuthOrderAppFreezeResponse.getId() != null) {
            throw new BadRequestAlertException("A new alipayFundAuthOrderAppFreezeResponse cannot already have an ID", ENTITY_NAME, "idexists");
        }
        AlipayFundAuthOrderAppFreezeResponse result = alipayFundAuthOrderAppFreezeResponseService.save(alipayFundAuthOrderAppFreezeResponse);
        return ResponseEntity.created(new URI("/api/alipay-fund-auth-order-app-freeze-responses/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /alipay-fund-auth-order-app-freeze-responses} : Updates an existing alipayFundAuthOrderAppFreezeResponse.
     *
     * @param alipayFundAuthOrderAppFreezeResponse the alipayFundAuthOrderAppFreezeResponse to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated alipayFundAuthOrderAppFreezeResponse,
     * or with status {@code 400 (Bad Request)} if the alipayFundAuthOrderAppFreezeResponse is not valid,
     * or with status {@code 500 (Internal Server Error)} if the alipayFundAuthOrderAppFreezeResponse couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/alipay-fund-auth-order-app-freeze-responses")
    public ResponseEntity<AlipayFundAuthOrderAppFreezeResponse> updateAlipayFundAuthOrderAppFreezeResponse(@RequestBody AlipayFundAuthOrderAppFreezeResponse alipayFundAuthOrderAppFreezeResponse) throws URISyntaxException {
        log.debug("REST request to update AlipayFundAuthOrderAppFreezeResponse : {}", alipayFundAuthOrderAppFreezeResponse);
        if (alipayFundAuthOrderAppFreezeResponse.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        AlipayFundAuthOrderAppFreezeResponse result = alipayFundAuthOrderAppFreezeResponseService.save(alipayFundAuthOrderAppFreezeResponse);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, alipayFundAuthOrderAppFreezeResponse.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /alipay-fund-auth-order-app-freeze-responses} : get all the alipayFundAuthOrderAppFreezeResponses.
     *

     * @param pageable the pagination information.

     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of alipayFundAuthOrderAppFreezeResponses in body.
     */
    @GetMapping("/alipay-fund-auth-order-app-freeze-responses")
    public ResponseEntity<List<AlipayFundAuthOrderAppFreezeResponse>> getAllAlipayFundAuthOrderAppFreezeResponses(Pageable pageable) {
        log.debug("REST request to get a page of AlipayFundAuthOrderAppFreezeResponses");
        Page<AlipayFundAuthOrderAppFreezeResponse> page = alipayFundAuthOrderAppFreezeResponseService.findAll(pageable);
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(ServletUriComponentsBuilder.fromCurrentRequest(), page);
        return ResponseEntity.ok().headers(headers).body(page.getContent());
    }

    /**
     * {@code GET  /alipay-fund-auth-order-app-freeze-responses/:id} : get the "id" alipayFundAuthOrderAppFreezeResponse.
     *
     * @param id the id of the alipayFundAuthOrderAppFreezeResponse to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the alipayFundAuthOrderAppFreezeResponse, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/alipay-fund-auth-order-app-freeze-responses/{id}")
    public ResponseEntity<AlipayFundAuthOrderAppFreezeResponse> getAlipayFundAuthOrderAppFreezeResponse(@PathVariable Long id) {
        log.debug("REST request to get AlipayFundAuthOrderAppFreezeResponse : {}", id);
        Optional<AlipayFundAuthOrderAppFreezeResponse> alipayFundAuthOrderAppFreezeResponse = alipayFundAuthOrderAppFreezeResponseService.findOne(id);
        return ResponseUtil.wrapOrNotFound(alipayFundAuthOrderAppFreezeResponse);
    }

    /**
     * {@code DELETE  /alipay-fund-auth-order-app-freeze-responses/:id} : delete the "id" alipayFundAuthOrderAppFreezeResponse.
     *
     * @param id the id of the alipayFundAuthOrderAppFreezeResponse to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/alipay-fund-auth-order-app-freeze-responses/{id}")
    public ResponseEntity<Void> deleteAlipayFundAuthOrderAppFreezeResponse(@PathVariable Long id) {
        log.debug("REST request to delete AlipayFundAuthOrderAppFreezeResponse : {}", id);
        alipayFundAuthOrderAppFreezeResponseService.delete(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString())).build();
    }
}
