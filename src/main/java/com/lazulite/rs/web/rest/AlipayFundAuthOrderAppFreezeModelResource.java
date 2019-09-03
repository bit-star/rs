package com.lazulite.rs.web.rest;

import com.lazulite.rs.domain.AlipayFundAuthOrderAppFreezeModel;
import com.lazulite.rs.service.AlipayFundAuthOrderAppFreezeModelService;
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
 * REST controller for managing {@link com.lazulite.rs.domain.AlipayFundAuthOrderAppFreezeModel}.
 */
@RestController
@RequestMapping("/api")
public class AlipayFundAuthOrderAppFreezeModelResource {

    private final Logger log = LoggerFactory.getLogger(AlipayFundAuthOrderAppFreezeModelResource.class);

    private static final String ENTITY_NAME = "alipayFundAuthOrderAppFreezeModel";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final AlipayFundAuthOrderAppFreezeModelService alipayFundAuthOrderAppFreezeModelService;

    public AlipayFundAuthOrderAppFreezeModelResource(AlipayFundAuthOrderAppFreezeModelService alipayFundAuthOrderAppFreezeModelService) {
        this.alipayFundAuthOrderAppFreezeModelService = alipayFundAuthOrderAppFreezeModelService;
    }

    /**
     * {@code POST  /alipay-fund-auth-order-app-freeze-models} : Create a new alipayFundAuthOrderAppFreezeModel.
     *
     * @param alipayFundAuthOrderAppFreezeModel the alipayFundAuthOrderAppFreezeModel to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new alipayFundAuthOrderAppFreezeModel, or with status {@code 400 (Bad Request)} if the alipayFundAuthOrderAppFreezeModel has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/alipay-fund-auth-order-app-freeze-models")
    public ResponseEntity<AlipayFundAuthOrderAppFreezeModel> createAlipayFundAuthOrderAppFreezeModel(@RequestBody AlipayFundAuthOrderAppFreezeModel alipayFundAuthOrderAppFreezeModel) throws URISyntaxException {
        log.debug("REST request to save AlipayFundAuthOrderAppFreezeModel : {}", alipayFundAuthOrderAppFreezeModel);
        if (alipayFundAuthOrderAppFreezeModel.getId() != null) {
            throw new BadRequestAlertException("A new alipayFundAuthOrderAppFreezeModel cannot already have an ID", ENTITY_NAME, "idexists");
        }
        AlipayFundAuthOrderAppFreezeModel result = alipayFundAuthOrderAppFreezeModelService.save(alipayFundAuthOrderAppFreezeModel);
        return ResponseEntity.created(new URI("/api/alipay-fund-auth-order-app-freeze-models/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /alipay-fund-auth-order-app-freeze-models} : Updates an existing alipayFundAuthOrderAppFreezeModel.
     *
     * @param alipayFundAuthOrderAppFreezeModel the alipayFundAuthOrderAppFreezeModel to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated alipayFundAuthOrderAppFreezeModel,
     * or with status {@code 400 (Bad Request)} if the alipayFundAuthOrderAppFreezeModel is not valid,
     * or with status {@code 500 (Internal Server Error)} if the alipayFundAuthOrderAppFreezeModel couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/alipay-fund-auth-order-app-freeze-models")
    public ResponseEntity<AlipayFundAuthOrderAppFreezeModel> updateAlipayFundAuthOrderAppFreezeModel(@RequestBody AlipayFundAuthOrderAppFreezeModel alipayFundAuthOrderAppFreezeModel) throws URISyntaxException {
        log.debug("REST request to update AlipayFundAuthOrderAppFreezeModel : {}", alipayFundAuthOrderAppFreezeModel);
        if (alipayFundAuthOrderAppFreezeModel.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        AlipayFundAuthOrderAppFreezeModel result = alipayFundAuthOrderAppFreezeModelService.save(alipayFundAuthOrderAppFreezeModel);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, alipayFundAuthOrderAppFreezeModel.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /alipay-fund-auth-order-app-freeze-models} : get all the alipayFundAuthOrderAppFreezeModels.
     *

     * @param pageable the pagination information.

     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of alipayFundAuthOrderAppFreezeModels in body.
     */
    @GetMapping("/alipay-fund-auth-order-app-freeze-models")
    public ResponseEntity<List<AlipayFundAuthOrderAppFreezeModel>> getAllAlipayFundAuthOrderAppFreezeModels(Pageable pageable) {
        log.debug("REST request to get a page of AlipayFundAuthOrderAppFreezeModels");
        Page<AlipayFundAuthOrderAppFreezeModel> page = alipayFundAuthOrderAppFreezeModelService.findAll(pageable);
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(ServletUriComponentsBuilder.fromCurrentRequest(), page);
        return ResponseEntity.ok().headers(headers).body(page.getContent());
    }

    /**
     * {@code GET  /alipay-fund-auth-order-app-freeze-models/:id} : get the "id" alipayFundAuthOrderAppFreezeModel.
     *
     * @param id the id of the alipayFundAuthOrderAppFreezeModel to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the alipayFundAuthOrderAppFreezeModel, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/alipay-fund-auth-order-app-freeze-models/{id}")
    public ResponseEntity<AlipayFundAuthOrderAppFreezeModel> getAlipayFundAuthOrderAppFreezeModel(@PathVariable Long id) {
        log.debug("REST request to get AlipayFundAuthOrderAppFreezeModel : {}", id);
        Optional<AlipayFundAuthOrderAppFreezeModel> alipayFundAuthOrderAppFreezeModel = alipayFundAuthOrderAppFreezeModelService.findOne(id);
        return ResponseUtil.wrapOrNotFound(alipayFundAuthOrderAppFreezeModel);
    }

    /**
     * {@code DELETE  /alipay-fund-auth-order-app-freeze-models/:id} : delete the "id" alipayFundAuthOrderAppFreezeModel.
     *
     * @param id the id of the alipayFundAuthOrderAppFreezeModel to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/alipay-fund-auth-order-app-freeze-models/{id}")
    public ResponseEntity<Void> deleteAlipayFundAuthOrderAppFreezeModel(@PathVariable Long id) {
        log.debug("REST request to delete AlipayFundAuthOrderAppFreezeModel : {}", id);
        alipayFundAuthOrderAppFreezeModelService.delete(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString())).build();
    }
}
