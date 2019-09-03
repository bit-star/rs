package com.lazulite.rs.web.rest;

import com.lazulite.rs.RsApp;
import com.lazulite.rs.domain.AlipayFundAuthOrderAppFreezeResponse;
import com.lazulite.rs.repository.AlipayFundAuthOrderAppFreezeResponseRepository;
import com.lazulite.rs.service.AlipayFundAuthOrderAppFreezeResponseService;
import com.lazulite.rs.web.rest.errors.ExceptionTranslator;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.web.PageableHandlerMethodArgumentResolver;
import org.springframework.http.MediaType;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.validation.Validator;

import javax.persistence.EntityManager;
import java.util.List;

import static com.lazulite.rs.web.rest.TestUtil.createFormattingConversionService;
import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.hasItem;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

/**
 * Integration tests for the {@link AlipayFundAuthOrderAppFreezeResponseResource} REST controller.
 */
@SpringBootTest(classes = RsApp.class)
public class AlipayFundAuthOrderAppFreezeResponseResourceIT {

    private static final String DEFAULT_AMOUNT = "AAAAAAAAAA";
    private static final String UPDATED_AMOUNT = "BBBBBBBBBB";

    private static final String DEFAULT_AUTH_NO = "AAAAAAAAAA";
    private static final String UPDATED_AUTH_NO = "BBBBBBBBBB";

    private static final String DEFAULT_CREDIT_AMOUNT = "AAAAAAAAAA";
    private static final String UPDATED_CREDIT_AMOUNT = "BBBBBBBBBB";

    private static final String DEFAULT_FUND_AMOUNT = "AAAAAAAAAA";
    private static final String UPDATED_FUND_AMOUNT = "BBBBBBBBBB";

    private static final String DEFAULT_GMT_TRANS = "AAAAAAAAAA";
    private static final String UPDATED_GMT_TRANS = "BBBBBBBBBB";

    private static final String DEFAULT_OPERATION_ID = "AAAAAAAAAA";
    private static final String UPDATED_OPERATION_ID = "BBBBBBBBBB";

    private static final String DEFAULT_OUT_ORDER_NO = "AAAAAAAAAA";
    private static final String UPDATED_OUT_ORDER_NO = "BBBBBBBBBB";

    private static final String DEFAULT_OUT_REQUEST_NO = "AAAAAAAAAA";
    private static final String UPDATED_OUT_REQUEST_NO = "BBBBBBBBBB";

    private static final String DEFAULT_PAYER_USER_ID = "AAAAAAAAAA";
    private static final String UPDATED_PAYER_USER_ID = "BBBBBBBBBB";

    private static final String DEFAULT_PRE_AUTH_TYPE = "AAAAAAAAAA";
    private static final String UPDATED_PRE_AUTH_TYPE = "BBBBBBBBBB";

    private static final String DEFAULT_STATUS = "AAAAAAAAAA";
    private static final String UPDATED_STATUS = "BBBBBBBBBB";

    @Autowired
    private AlipayFundAuthOrderAppFreezeResponseRepository alipayFundAuthOrderAppFreezeResponseRepository;

    @Autowired
    private AlipayFundAuthOrderAppFreezeResponseService alipayFundAuthOrderAppFreezeResponseService;

    @Autowired
    private MappingJackson2HttpMessageConverter jacksonMessageConverter;

    @Autowired
    private PageableHandlerMethodArgumentResolver pageableArgumentResolver;

    @Autowired
    private ExceptionTranslator exceptionTranslator;

    @Autowired
    private EntityManager em;

    @Autowired
    private Validator validator;

    private MockMvc restAlipayFundAuthOrderAppFreezeResponseMockMvc;

    private AlipayFundAuthOrderAppFreezeResponse alipayFundAuthOrderAppFreezeResponse;

    @BeforeEach
    public void setup() {
        MockitoAnnotations.initMocks(this);
        final AlipayFundAuthOrderAppFreezeResponseResource alipayFundAuthOrderAppFreezeResponseResource = new AlipayFundAuthOrderAppFreezeResponseResource(alipayFundAuthOrderAppFreezeResponseService);
        this.restAlipayFundAuthOrderAppFreezeResponseMockMvc = MockMvcBuilders.standaloneSetup(alipayFundAuthOrderAppFreezeResponseResource)
            .setCustomArgumentResolvers(pageableArgumentResolver)
            .setControllerAdvice(exceptionTranslator)
            .setConversionService(createFormattingConversionService())
            .setMessageConverters(jacksonMessageConverter)
            .setValidator(validator).build();
    }

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static AlipayFundAuthOrderAppFreezeResponse createEntity(EntityManager em) {
        AlipayFundAuthOrderAppFreezeResponse alipayFundAuthOrderAppFreezeResponse = new AlipayFundAuthOrderAppFreezeResponse()
            .amount(DEFAULT_AMOUNT)
            .authNo(DEFAULT_AUTH_NO)
            .creditAmount(DEFAULT_CREDIT_AMOUNT)
            .fundAmount(DEFAULT_FUND_AMOUNT)
            .gmtTrans(DEFAULT_GMT_TRANS)
            .operationId(DEFAULT_OPERATION_ID)
            .outOrderNo(DEFAULT_OUT_ORDER_NO)
            .outRequestNo(DEFAULT_OUT_REQUEST_NO)
            .payerUserId(DEFAULT_PAYER_USER_ID)
            .preAuthType(DEFAULT_PRE_AUTH_TYPE)
            .status(DEFAULT_STATUS);
        return alipayFundAuthOrderAppFreezeResponse;
    }
    /**
     * Create an updated entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static AlipayFundAuthOrderAppFreezeResponse createUpdatedEntity(EntityManager em) {
        AlipayFundAuthOrderAppFreezeResponse alipayFundAuthOrderAppFreezeResponse = new AlipayFundAuthOrderAppFreezeResponse()
            .amount(UPDATED_AMOUNT)
            .authNo(UPDATED_AUTH_NO)
            .creditAmount(UPDATED_CREDIT_AMOUNT)
            .fundAmount(UPDATED_FUND_AMOUNT)
            .gmtTrans(UPDATED_GMT_TRANS)
            .operationId(UPDATED_OPERATION_ID)
            .outOrderNo(UPDATED_OUT_ORDER_NO)
            .outRequestNo(UPDATED_OUT_REQUEST_NO)
            .payerUserId(UPDATED_PAYER_USER_ID)
            .preAuthType(UPDATED_PRE_AUTH_TYPE)
            .status(UPDATED_STATUS);
        return alipayFundAuthOrderAppFreezeResponse;
    }

    @BeforeEach
    public void initTest() {
        alipayFundAuthOrderAppFreezeResponse = createEntity(em);
    }

    @Test
    @Transactional
    public void createAlipayFundAuthOrderAppFreezeResponse() throws Exception {
        int databaseSizeBeforeCreate = alipayFundAuthOrderAppFreezeResponseRepository.findAll().size();

        // Create the AlipayFundAuthOrderAppFreezeResponse
        restAlipayFundAuthOrderAppFreezeResponseMockMvc.perform(post("/api/alipay-fund-auth-order-app-freeze-responses")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(alipayFundAuthOrderAppFreezeResponse)))
            .andExpect(status().isCreated());

        // Validate the AlipayFundAuthOrderAppFreezeResponse in the database
        List<AlipayFundAuthOrderAppFreezeResponse> alipayFundAuthOrderAppFreezeResponseList = alipayFundAuthOrderAppFreezeResponseRepository.findAll();
        assertThat(alipayFundAuthOrderAppFreezeResponseList).hasSize(databaseSizeBeforeCreate + 1);
        AlipayFundAuthOrderAppFreezeResponse testAlipayFundAuthOrderAppFreezeResponse = alipayFundAuthOrderAppFreezeResponseList.get(alipayFundAuthOrderAppFreezeResponseList.size() - 1);
        assertThat(testAlipayFundAuthOrderAppFreezeResponse.getAmount()).isEqualTo(DEFAULT_AMOUNT);
        assertThat(testAlipayFundAuthOrderAppFreezeResponse.getAuthNo()).isEqualTo(DEFAULT_AUTH_NO);
        assertThat(testAlipayFundAuthOrderAppFreezeResponse.getCreditAmount()).isEqualTo(DEFAULT_CREDIT_AMOUNT);
        assertThat(testAlipayFundAuthOrderAppFreezeResponse.getFundAmount()).isEqualTo(DEFAULT_FUND_AMOUNT);
        assertThat(testAlipayFundAuthOrderAppFreezeResponse.getGmtTrans()).isEqualTo(DEFAULT_GMT_TRANS);
        assertThat(testAlipayFundAuthOrderAppFreezeResponse.getOperationId()).isEqualTo(DEFAULT_OPERATION_ID);
        assertThat(testAlipayFundAuthOrderAppFreezeResponse.getOutOrderNo()).isEqualTo(DEFAULT_OUT_ORDER_NO);
        assertThat(testAlipayFundAuthOrderAppFreezeResponse.getOutRequestNo()).isEqualTo(DEFAULT_OUT_REQUEST_NO);
        assertThat(testAlipayFundAuthOrderAppFreezeResponse.getPayerUserId()).isEqualTo(DEFAULT_PAYER_USER_ID);
        assertThat(testAlipayFundAuthOrderAppFreezeResponse.getPreAuthType()).isEqualTo(DEFAULT_PRE_AUTH_TYPE);
        assertThat(testAlipayFundAuthOrderAppFreezeResponse.getStatus()).isEqualTo(DEFAULT_STATUS);
    }

    @Test
    @Transactional
    public void createAlipayFundAuthOrderAppFreezeResponseWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = alipayFundAuthOrderAppFreezeResponseRepository.findAll().size();

        // Create the AlipayFundAuthOrderAppFreezeResponse with an existing ID
        alipayFundAuthOrderAppFreezeResponse.setId(1L);

        // An entity with an existing ID cannot be created, so this API call must fail
        restAlipayFundAuthOrderAppFreezeResponseMockMvc.perform(post("/api/alipay-fund-auth-order-app-freeze-responses")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(alipayFundAuthOrderAppFreezeResponse)))
            .andExpect(status().isBadRequest());

        // Validate the AlipayFundAuthOrderAppFreezeResponse in the database
        List<AlipayFundAuthOrderAppFreezeResponse> alipayFundAuthOrderAppFreezeResponseList = alipayFundAuthOrderAppFreezeResponseRepository.findAll();
        assertThat(alipayFundAuthOrderAppFreezeResponseList).hasSize(databaseSizeBeforeCreate);
    }


    @Test
    @Transactional
    public void getAllAlipayFundAuthOrderAppFreezeResponses() throws Exception {
        // Initialize the database
        alipayFundAuthOrderAppFreezeResponseRepository.saveAndFlush(alipayFundAuthOrderAppFreezeResponse);

        // Get all the alipayFundAuthOrderAppFreezeResponseList
        restAlipayFundAuthOrderAppFreezeResponseMockMvc.perform(get("/api/alipay-fund-auth-order-app-freeze-responses?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(alipayFundAuthOrderAppFreezeResponse.getId().intValue())))
            .andExpect(jsonPath("$.[*].amount").value(hasItem(DEFAULT_AMOUNT.toString())))
            .andExpect(jsonPath("$.[*].authNo").value(hasItem(DEFAULT_AUTH_NO.toString())))
            .andExpect(jsonPath("$.[*].creditAmount").value(hasItem(DEFAULT_CREDIT_AMOUNT.toString())))
            .andExpect(jsonPath("$.[*].fundAmount").value(hasItem(DEFAULT_FUND_AMOUNT.toString())))
            .andExpect(jsonPath("$.[*].gmtTrans").value(hasItem(DEFAULT_GMT_TRANS.toString())))
            .andExpect(jsonPath("$.[*].operationId").value(hasItem(DEFAULT_OPERATION_ID.toString())))
            .andExpect(jsonPath("$.[*].outOrderNo").value(hasItem(DEFAULT_OUT_ORDER_NO.toString())))
            .andExpect(jsonPath("$.[*].outRequestNo").value(hasItem(DEFAULT_OUT_REQUEST_NO.toString())))
            .andExpect(jsonPath("$.[*].payerUserId").value(hasItem(DEFAULT_PAYER_USER_ID.toString())))
            .andExpect(jsonPath("$.[*].preAuthType").value(hasItem(DEFAULT_PRE_AUTH_TYPE.toString())))
            .andExpect(jsonPath("$.[*].status").value(hasItem(DEFAULT_STATUS.toString())));
    }
    
    @Test
    @Transactional
    public void getAlipayFundAuthOrderAppFreezeResponse() throws Exception {
        // Initialize the database
        alipayFundAuthOrderAppFreezeResponseRepository.saveAndFlush(alipayFundAuthOrderAppFreezeResponse);

        // Get the alipayFundAuthOrderAppFreezeResponse
        restAlipayFundAuthOrderAppFreezeResponseMockMvc.perform(get("/api/alipay-fund-auth-order-app-freeze-responses/{id}", alipayFundAuthOrderAppFreezeResponse.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.id").value(alipayFundAuthOrderAppFreezeResponse.getId().intValue()))
            .andExpect(jsonPath("$.amount").value(DEFAULT_AMOUNT.toString()))
            .andExpect(jsonPath("$.authNo").value(DEFAULT_AUTH_NO.toString()))
            .andExpect(jsonPath("$.creditAmount").value(DEFAULT_CREDIT_AMOUNT.toString()))
            .andExpect(jsonPath("$.fundAmount").value(DEFAULT_FUND_AMOUNT.toString()))
            .andExpect(jsonPath("$.gmtTrans").value(DEFAULT_GMT_TRANS.toString()))
            .andExpect(jsonPath("$.operationId").value(DEFAULT_OPERATION_ID.toString()))
            .andExpect(jsonPath("$.outOrderNo").value(DEFAULT_OUT_ORDER_NO.toString()))
            .andExpect(jsonPath("$.outRequestNo").value(DEFAULT_OUT_REQUEST_NO.toString()))
            .andExpect(jsonPath("$.payerUserId").value(DEFAULT_PAYER_USER_ID.toString()))
            .andExpect(jsonPath("$.preAuthType").value(DEFAULT_PRE_AUTH_TYPE.toString()))
            .andExpect(jsonPath("$.status").value(DEFAULT_STATUS.toString()));
    }

    @Test
    @Transactional
    public void getNonExistingAlipayFundAuthOrderAppFreezeResponse() throws Exception {
        // Get the alipayFundAuthOrderAppFreezeResponse
        restAlipayFundAuthOrderAppFreezeResponseMockMvc.perform(get("/api/alipay-fund-auth-order-app-freeze-responses/{id}", Long.MAX_VALUE))
            .andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    public void updateAlipayFundAuthOrderAppFreezeResponse() throws Exception {
        // Initialize the database
        alipayFundAuthOrderAppFreezeResponseService.save(alipayFundAuthOrderAppFreezeResponse);

        int databaseSizeBeforeUpdate = alipayFundAuthOrderAppFreezeResponseRepository.findAll().size();

        // Update the alipayFundAuthOrderAppFreezeResponse
        AlipayFundAuthOrderAppFreezeResponse updatedAlipayFundAuthOrderAppFreezeResponse = alipayFundAuthOrderAppFreezeResponseRepository.findById(alipayFundAuthOrderAppFreezeResponse.getId()).get();
        // Disconnect from session so that the updates on updatedAlipayFundAuthOrderAppFreezeResponse are not directly saved in db
        em.detach(updatedAlipayFundAuthOrderAppFreezeResponse);
        updatedAlipayFundAuthOrderAppFreezeResponse
            .amount(UPDATED_AMOUNT)
            .authNo(UPDATED_AUTH_NO)
            .creditAmount(UPDATED_CREDIT_AMOUNT)
            .fundAmount(UPDATED_FUND_AMOUNT)
            .gmtTrans(UPDATED_GMT_TRANS)
            .operationId(UPDATED_OPERATION_ID)
            .outOrderNo(UPDATED_OUT_ORDER_NO)
            .outRequestNo(UPDATED_OUT_REQUEST_NO)
            .payerUserId(UPDATED_PAYER_USER_ID)
            .preAuthType(UPDATED_PRE_AUTH_TYPE)
            .status(UPDATED_STATUS);

        restAlipayFundAuthOrderAppFreezeResponseMockMvc.perform(put("/api/alipay-fund-auth-order-app-freeze-responses")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(updatedAlipayFundAuthOrderAppFreezeResponse)))
            .andExpect(status().isOk());

        // Validate the AlipayFundAuthOrderAppFreezeResponse in the database
        List<AlipayFundAuthOrderAppFreezeResponse> alipayFundAuthOrderAppFreezeResponseList = alipayFundAuthOrderAppFreezeResponseRepository.findAll();
        assertThat(alipayFundAuthOrderAppFreezeResponseList).hasSize(databaseSizeBeforeUpdate);
        AlipayFundAuthOrderAppFreezeResponse testAlipayFundAuthOrderAppFreezeResponse = alipayFundAuthOrderAppFreezeResponseList.get(alipayFundAuthOrderAppFreezeResponseList.size() - 1);
        assertThat(testAlipayFundAuthOrderAppFreezeResponse.getAmount()).isEqualTo(UPDATED_AMOUNT);
        assertThat(testAlipayFundAuthOrderAppFreezeResponse.getAuthNo()).isEqualTo(UPDATED_AUTH_NO);
        assertThat(testAlipayFundAuthOrderAppFreezeResponse.getCreditAmount()).isEqualTo(UPDATED_CREDIT_AMOUNT);
        assertThat(testAlipayFundAuthOrderAppFreezeResponse.getFundAmount()).isEqualTo(UPDATED_FUND_AMOUNT);
        assertThat(testAlipayFundAuthOrderAppFreezeResponse.getGmtTrans()).isEqualTo(UPDATED_GMT_TRANS);
        assertThat(testAlipayFundAuthOrderAppFreezeResponse.getOperationId()).isEqualTo(UPDATED_OPERATION_ID);
        assertThat(testAlipayFundAuthOrderAppFreezeResponse.getOutOrderNo()).isEqualTo(UPDATED_OUT_ORDER_NO);
        assertThat(testAlipayFundAuthOrderAppFreezeResponse.getOutRequestNo()).isEqualTo(UPDATED_OUT_REQUEST_NO);
        assertThat(testAlipayFundAuthOrderAppFreezeResponse.getPayerUserId()).isEqualTo(UPDATED_PAYER_USER_ID);
        assertThat(testAlipayFundAuthOrderAppFreezeResponse.getPreAuthType()).isEqualTo(UPDATED_PRE_AUTH_TYPE);
        assertThat(testAlipayFundAuthOrderAppFreezeResponse.getStatus()).isEqualTo(UPDATED_STATUS);
    }

    @Test
    @Transactional
    public void updateNonExistingAlipayFundAuthOrderAppFreezeResponse() throws Exception {
        int databaseSizeBeforeUpdate = alipayFundAuthOrderAppFreezeResponseRepository.findAll().size();

        // Create the AlipayFundAuthOrderAppFreezeResponse

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restAlipayFundAuthOrderAppFreezeResponseMockMvc.perform(put("/api/alipay-fund-auth-order-app-freeze-responses")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(alipayFundAuthOrderAppFreezeResponse)))
            .andExpect(status().isBadRequest());

        // Validate the AlipayFundAuthOrderAppFreezeResponse in the database
        List<AlipayFundAuthOrderAppFreezeResponse> alipayFundAuthOrderAppFreezeResponseList = alipayFundAuthOrderAppFreezeResponseRepository.findAll();
        assertThat(alipayFundAuthOrderAppFreezeResponseList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    public void deleteAlipayFundAuthOrderAppFreezeResponse() throws Exception {
        // Initialize the database
        alipayFundAuthOrderAppFreezeResponseService.save(alipayFundAuthOrderAppFreezeResponse);

        int databaseSizeBeforeDelete = alipayFundAuthOrderAppFreezeResponseRepository.findAll().size();

        // Delete the alipayFundAuthOrderAppFreezeResponse
        restAlipayFundAuthOrderAppFreezeResponseMockMvc.perform(delete("/api/alipay-fund-auth-order-app-freeze-responses/{id}", alipayFundAuthOrderAppFreezeResponse.getId())
            .accept(TestUtil.APPLICATION_JSON_UTF8))
            .andExpect(status().isNoContent());

        // Validate the database contains one less item
        List<AlipayFundAuthOrderAppFreezeResponse> alipayFundAuthOrderAppFreezeResponseList = alipayFundAuthOrderAppFreezeResponseRepository.findAll();
        assertThat(alipayFundAuthOrderAppFreezeResponseList).hasSize(databaseSizeBeforeDelete - 1);
    }

    @Test
    @Transactional
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(AlipayFundAuthOrderAppFreezeResponse.class);
        AlipayFundAuthOrderAppFreezeResponse alipayFundAuthOrderAppFreezeResponse1 = new AlipayFundAuthOrderAppFreezeResponse();
        alipayFundAuthOrderAppFreezeResponse1.setId(1L);
        AlipayFundAuthOrderAppFreezeResponse alipayFundAuthOrderAppFreezeResponse2 = new AlipayFundAuthOrderAppFreezeResponse();
        alipayFundAuthOrderAppFreezeResponse2.setId(alipayFundAuthOrderAppFreezeResponse1.getId());
        assertThat(alipayFundAuthOrderAppFreezeResponse1).isEqualTo(alipayFundAuthOrderAppFreezeResponse2);
        alipayFundAuthOrderAppFreezeResponse2.setId(2L);
        assertThat(alipayFundAuthOrderAppFreezeResponse1).isNotEqualTo(alipayFundAuthOrderAppFreezeResponse2);
        alipayFundAuthOrderAppFreezeResponse1.setId(null);
        assertThat(alipayFundAuthOrderAppFreezeResponse1).isNotEqualTo(alipayFundAuthOrderAppFreezeResponse2);
    }
}
