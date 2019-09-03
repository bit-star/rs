package com.lazulite.rs.web.rest;

import com.lazulite.rs.RsApp;
import com.lazulite.rs.domain.AlipayFundAuthOrderAppFreezeModel;
import com.lazulite.rs.repository.AlipayFundAuthOrderAppFreezeModelRepository;
import com.lazulite.rs.service.AlipayFundAuthOrderAppFreezeModelService;
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
 * Integration tests for the {@link AlipayFundAuthOrderAppFreezeModelResource} REST controller.
 */
@SpringBootTest(classes = RsApp.class)
public class AlipayFundAuthOrderAppFreezeModelResourceIT {

    private static final String DEFAULT_ORDER_TITLE = "AAAAAAAAAA";
    private static final String UPDATED_ORDER_TITLE = "BBBBBBBBBB";

    private static final String DEFAULT_OUT_ORDER_NO = "AAAAAAAAAA";
    private static final String UPDATED_OUT_ORDER_NO = "BBBBBBBBBB";

    private static final String DEFAULT_OUT_REQUEST_NO = "AAAAAAAAAA";
    private static final String UPDATED_OUT_REQUEST_NO = "BBBBBBBBBB";

    private static final String DEFAULT_PAYEE_USER_ID = "AAAAAAAAAA";
    private static final String UPDATED_PAYEE_USER_ID = "BBBBBBBBBB";

    private static final String DEFAULT_PAYEE_LOGON_ID = "AAAAAAAAAA";
    private static final String UPDATED_PAYEE_LOGON_ID = "BBBBBBBBBB";

    private static final String DEFAULT_PRODUCT_CODE = "AAAAAAAAAA";
    private static final String UPDATED_PRODUCT_CODE = "BBBBBBBBBB";

    private static final String DEFAULT_AMOUNT = "AAAAAAAAAA";
    private static final String UPDATED_AMOUNT = "BBBBBBBBBB";

    private static final String DEFAULT_EXTRA_PARAM = "AAAAAAAAAA";
    private static final String UPDATED_EXTRA_PARAM = "BBBBBBBBBB";

    private static final String DEFAULT_NOTIFY_URL = "AAAAAAAAAA";
    private static final String UPDATED_NOTIFY_URL = "BBBBBBBBBB";

    @Autowired
    private AlipayFundAuthOrderAppFreezeModelRepository alipayFundAuthOrderAppFreezeModelRepository;

    @Autowired
    private AlipayFundAuthOrderAppFreezeModelService alipayFundAuthOrderAppFreezeModelService;

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

    private MockMvc restAlipayFundAuthOrderAppFreezeModelMockMvc;

    private AlipayFundAuthOrderAppFreezeModel alipayFundAuthOrderAppFreezeModel;

    @BeforeEach
    public void setup() {
        MockitoAnnotations.initMocks(this);
        final AlipayFundAuthOrderAppFreezeModelResource alipayFundAuthOrderAppFreezeModelResource = new AlipayFundAuthOrderAppFreezeModelResource(alipayFundAuthOrderAppFreezeModelService);
        this.restAlipayFundAuthOrderAppFreezeModelMockMvc = MockMvcBuilders.standaloneSetup(alipayFundAuthOrderAppFreezeModelResource)
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
    public static AlipayFundAuthOrderAppFreezeModel createEntity(EntityManager em) {
        AlipayFundAuthOrderAppFreezeModel alipayFundAuthOrderAppFreezeModel = new AlipayFundAuthOrderAppFreezeModel()
            .orderTitle(DEFAULT_ORDER_TITLE)
            .outOrderNo(DEFAULT_OUT_ORDER_NO)
            .outRequestNo(DEFAULT_OUT_REQUEST_NO)
            .payeeUserId(DEFAULT_PAYEE_USER_ID)
            .payeeLogonId(DEFAULT_PAYEE_LOGON_ID)
            .productCode(DEFAULT_PRODUCT_CODE)
            .amount(DEFAULT_AMOUNT)
            .extraParam(DEFAULT_EXTRA_PARAM)
            .notifyUrl(DEFAULT_NOTIFY_URL);
        return alipayFundAuthOrderAppFreezeModel;
    }
    /**
     * Create an updated entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static AlipayFundAuthOrderAppFreezeModel createUpdatedEntity(EntityManager em) {
        AlipayFundAuthOrderAppFreezeModel alipayFundAuthOrderAppFreezeModel = new AlipayFundAuthOrderAppFreezeModel()
            .orderTitle(UPDATED_ORDER_TITLE)
            .outOrderNo(UPDATED_OUT_ORDER_NO)
            .outRequestNo(UPDATED_OUT_REQUEST_NO)
            .payeeUserId(UPDATED_PAYEE_USER_ID)
            .payeeLogonId(UPDATED_PAYEE_LOGON_ID)
            .productCode(UPDATED_PRODUCT_CODE)
            .amount(UPDATED_AMOUNT)
            .extraParam(UPDATED_EXTRA_PARAM)
            .notifyUrl(UPDATED_NOTIFY_URL);
        return alipayFundAuthOrderAppFreezeModel;
    }

    @BeforeEach
    public void initTest() {
        alipayFundAuthOrderAppFreezeModel = createEntity(em);
    }

    @Test
    @Transactional
    public void createAlipayFundAuthOrderAppFreezeModel() throws Exception {
        int databaseSizeBeforeCreate = alipayFundAuthOrderAppFreezeModelRepository.findAll().size();

        // Create the AlipayFundAuthOrderAppFreezeModel
        restAlipayFundAuthOrderAppFreezeModelMockMvc.perform(post("/api/alipay-fund-auth-order-app-freeze-models")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(alipayFundAuthOrderAppFreezeModel)))
            .andExpect(status().isCreated());

        // Validate the AlipayFundAuthOrderAppFreezeModel in the database
        List<AlipayFundAuthOrderAppFreezeModel> alipayFundAuthOrderAppFreezeModelList = alipayFundAuthOrderAppFreezeModelRepository.findAll();
        assertThat(alipayFundAuthOrderAppFreezeModelList).hasSize(databaseSizeBeforeCreate + 1);
        AlipayFundAuthOrderAppFreezeModel testAlipayFundAuthOrderAppFreezeModel = alipayFundAuthOrderAppFreezeModelList.get(alipayFundAuthOrderAppFreezeModelList.size() - 1);
        assertThat(testAlipayFundAuthOrderAppFreezeModel.getOrderTitle()).isEqualTo(DEFAULT_ORDER_TITLE);
        assertThat(testAlipayFundAuthOrderAppFreezeModel.getOutOrderNo()).isEqualTo(DEFAULT_OUT_ORDER_NO);
        assertThat(testAlipayFundAuthOrderAppFreezeModel.getOutRequestNo()).isEqualTo(DEFAULT_OUT_REQUEST_NO);
        assertThat(testAlipayFundAuthOrderAppFreezeModel.getPayeeUserId()).isEqualTo(DEFAULT_PAYEE_USER_ID);
        assertThat(testAlipayFundAuthOrderAppFreezeModel.getPayeeLogonId()).isEqualTo(DEFAULT_PAYEE_LOGON_ID);
        assertThat(testAlipayFundAuthOrderAppFreezeModel.getProductCode()).isEqualTo(DEFAULT_PRODUCT_CODE);
        assertThat(testAlipayFundAuthOrderAppFreezeModel.getAmount()).isEqualTo(DEFAULT_AMOUNT);
        assertThat(testAlipayFundAuthOrderAppFreezeModel.getExtraParam()).isEqualTo(DEFAULT_EXTRA_PARAM);
        assertThat(testAlipayFundAuthOrderAppFreezeModel.getNotifyUrl()).isEqualTo(DEFAULT_NOTIFY_URL);
    }

    @Test
    @Transactional
    public void createAlipayFundAuthOrderAppFreezeModelWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = alipayFundAuthOrderAppFreezeModelRepository.findAll().size();

        // Create the AlipayFundAuthOrderAppFreezeModel with an existing ID
        alipayFundAuthOrderAppFreezeModel.setId(1L);

        // An entity with an existing ID cannot be created, so this API call must fail
        restAlipayFundAuthOrderAppFreezeModelMockMvc.perform(post("/api/alipay-fund-auth-order-app-freeze-models")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(alipayFundAuthOrderAppFreezeModel)))
            .andExpect(status().isBadRequest());

        // Validate the AlipayFundAuthOrderAppFreezeModel in the database
        List<AlipayFundAuthOrderAppFreezeModel> alipayFundAuthOrderAppFreezeModelList = alipayFundAuthOrderAppFreezeModelRepository.findAll();
        assertThat(alipayFundAuthOrderAppFreezeModelList).hasSize(databaseSizeBeforeCreate);
    }


    @Test
    @Transactional
    public void getAllAlipayFundAuthOrderAppFreezeModels() throws Exception {
        // Initialize the database
        alipayFundAuthOrderAppFreezeModelRepository.saveAndFlush(alipayFundAuthOrderAppFreezeModel);

        // Get all the alipayFundAuthOrderAppFreezeModelList
        restAlipayFundAuthOrderAppFreezeModelMockMvc.perform(get("/api/alipay-fund-auth-order-app-freeze-models?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(alipayFundAuthOrderAppFreezeModel.getId().intValue())))
            .andExpect(jsonPath("$.[*].orderTitle").value(hasItem(DEFAULT_ORDER_TITLE.toString())))
            .andExpect(jsonPath("$.[*].outOrderNo").value(hasItem(DEFAULT_OUT_ORDER_NO.toString())))
            .andExpect(jsonPath("$.[*].outRequestNo").value(hasItem(DEFAULT_OUT_REQUEST_NO.toString())))
            .andExpect(jsonPath("$.[*].payeeUserId").value(hasItem(DEFAULT_PAYEE_USER_ID.toString())))
            .andExpect(jsonPath("$.[*].payeeLogonId").value(hasItem(DEFAULT_PAYEE_LOGON_ID.toString())))
            .andExpect(jsonPath("$.[*].productCode").value(hasItem(DEFAULT_PRODUCT_CODE.toString())))
            .andExpect(jsonPath("$.[*].amount").value(hasItem(DEFAULT_AMOUNT.toString())))
            .andExpect(jsonPath("$.[*].extraParam").value(hasItem(DEFAULT_EXTRA_PARAM.toString())))
            .andExpect(jsonPath("$.[*].notifyUrl").value(hasItem(DEFAULT_NOTIFY_URL.toString())));
    }
    
    @Test
    @Transactional
    public void getAlipayFundAuthOrderAppFreezeModel() throws Exception {
        // Initialize the database
        alipayFundAuthOrderAppFreezeModelRepository.saveAndFlush(alipayFundAuthOrderAppFreezeModel);

        // Get the alipayFundAuthOrderAppFreezeModel
        restAlipayFundAuthOrderAppFreezeModelMockMvc.perform(get("/api/alipay-fund-auth-order-app-freeze-models/{id}", alipayFundAuthOrderAppFreezeModel.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.id").value(alipayFundAuthOrderAppFreezeModel.getId().intValue()))
            .andExpect(jsonPath("$.orderTitle").value(DEFAULT_ORDER_TITLE.toString()))
            .andExpect(jsonPath("$.outOrderNo").value(DEFAULT_OUT_ORDER_NO.toString()))
            .andExpect(jsonPath("$.outRequestNo").value(DEFAULT_OUT_REQUEST_NO.toString()))
            .andExpect(jsonPath("$.payeeUserId").value(DEFAULT_PAYEE_USER_ID.toString()))
            .andExpect(jsonPath("$.payeeLogonId").value(DEFAULT_PAYEE_LOGON_ID.toString()))
            .andExpect(jsonPath("$.productCode").value(DEFAULT_PRODUCT_CODE.toString()))
            .andExpect(jsonPath("$.amount").value(DEFAULT_AMOUNT.toString()))
            .andExpect(jsonPath("$.extraParam").value(DEFAULT_EXTRA_PARAM.toString()))
            .andExpect(jsonPath("$.notifyUrl").value(DEFAULT_NOTIFY_URL.toString()));
    }

    @Test
    @Transactional
    public void getNonExistingAlipayFundAuthOrderAppFreezeModel() throws Exception {
        // Get the alipayFundAuthOrderAppFreezeModel
        restAlipayFundAuthOrderAppFreezeModelMockMvc.perform(get("/api/alipay-fund-auth-order-app-freeze-models/{id}", Long.MAX_VALUE))
            .andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    public void updateAlipayFundAuthOrderAppFreezeModel() throws Exception {
        // Initialize the database
        alipayFundAuthOrderAppFreezeModelService.save(alipayFundAuthOrderAppFreezeModel);

        int databaseSizeBeforeUpdate = alipayFundAuthOrderAppFreezeModelRepository.findAll().size();

        // Update the alipayFundAuthOrderAppFreezeModel
        AlipayFundAuthOrderAppFreezeModel updatedAlipayFundAuthOrderAppFreezeModel = alipayFundAuthOrderAppFreezeModelRepository.findById(alipayFundAuthOrderAppFreezeModel.getId()).get();
        // Disconnect from session so that the updates on updatedAlipayFundAuthOrderAppFreezeModel are not directly saved in db
        em.detach(updatedAlipayFundAuthOrderAppFreezeModel);
        updatedAlipayFundAuthOrderAppFreezeModel
            .orderTitle(UPDATED_ORDER_TITLE)
            .outOrderNo(UPDATED_OUT_ORDER_NO)
            .outRequestNo(UPDATED_OUT_REQUEST_NO)
            .payeeUserId(UPDATED_PAYEE_USER_ID)
            .payeeLogonId(UPDATED_PAYEE_LOGON_ID)
            .productCode(UPDATED_PRODUCT_CODE)
            .amount(UPDATED_AMOUNT)
            .extraParam(UPDATED_EXTRA_PARAM)
            .notifyUrl(UPDATED_NOTIFY_URL);

        restAlipayFundAuthOrderAppFreezeModelMockMvc.perform(put("/api/alipay-fund-auth-order-app-freeze-models")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(updatedAlipayFundAuthOrderAppFreezeModel)))
            .andExpect(status().isOk());

        // Validate the AlipayFundAuthOrderAppFreezeModel in the database
        List<AlipayFundAuthOrderAppFreezeModel> alipayFundAuthOrderAppFreezeModelList = alipayFundAuthOrderAppFreezeModelRepository.findAll();
        assertThat(alipayFundAuthOrderAppFreezeModelList).hasSize(databaseSizeBeforeUpdate);
        AlipayFundAuthOrderAppFreezeModel testAlipayFundAuthOrderAppFreezeModel = alipayFundAuthOrderAppFreezeModelList.get(alipayFundAuthOrderAppFreezeModelList.size() - 1);
        assertThat(testAlipayFundAuthOrderAppFreezeModel.getOrderTitle()).isEqualTo(UPDATED_ORDER_TITLE);
        assertThat(testAlipayFundAuthOrderAppFreezeModel.getOutOrderNo()).isEqualTo(UPDATED_OUT_ORDER_NO);
        assertThat(testAlipayFundAuthOrderAppFreezeModel.getOutRequestNo()).isEqualTo(UPDATED_OUT_REQUEST_NO);
        assertThat(testAlipayFundAuthOrderAppFreezeModel.getPayeeUserId()).isEqualTo(UPDATED_PAYEE_USER_ID);
        assertThat(testAlipayFundAuthOrderAppFreezeModel.getPayeeLogonId()).isEqualTo(UPDATED_PAYEE_LOGON_ID);
        assertThat(testAlipayFundAuthOrderAppFreezeModel.getProductCode()).isEqualTo(UPDATED_PRODUCT_CODE);
        assertThat(testAlipayFundAuthOrderAppFreezeModel.getAmount()).isEqualTo(UPDATED_AMOUNT);
        assertThat(testAlipayFundAuthOrderAppFreezeModel.getExtraParam()).isEqualTo(UPDATED_EXTRA_PARAM);
        assertThat(testAlipayFundAuthOrderAppFreezeModel.getNotifyUrl()).isEqualTo(UPDATED_NOTIFY_URL);
    }

    @Test
    @Transactional
    public void updateNonExistingAlipayFundAuthOrderAppFreezeModel() throws Exception {
        int databaseSizeBeforeUpdate = alipayFundAuthOrderAppFreezeModelRepository.findAll().size();

        // Create the AlipayFundAuthOrderAppFreezeModel

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restAlipayFundAuthOrderAppFreezeModelMockMvc.perform(put("/api/alipay-fund-auth-order-app-freeze-models")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(alipayFundAuthOrderAppFreezeModel)))
            .andExpect(status().isBadRequest());

        // Validate the AlipayFundAuthOrderAppFreezeModel in the database
        List<AlipayFundAuthOrderAppFreezeModel> alipayFundAuthOrderAppFreezeModelList = alipayFundAuthOrderAppFreezeModelRepository.findAll();
        assertThat(alipayFundAuthOrderAppFreezeModelList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    public void deleteAlipayFundAuthOrderAppFreezeModel() throws Exception {
        // Initialize the database
        alipayFundAuthOrderAppFreezeModelService.save(alipayFundAuthOrderAppFreezeModel);

        int databaseSizeBeforeDelete = alipayFundAuthOrderAppFreezeModelRepository.findAll().size();

        // Delete the alipayFundAuthOrderAppFreezeModel
        restAlipayFundAuthOrderAppFreezeModelMockMvc.perform(delete("/api/alipay-fund-auth-order-app-freeze-models/{id}", alipayFundAuthOrderAppFreezeModel.getId())
            .accept(TestUtil.APPLICATION_JSON_UTF8))
            .andExpect(status().isNoContent());

        // Validate the database contains one less item
        List<AlipayFundAuthOrderAppFreezeModel> alipayFundAuthOrderAppFreezeModelList = alipayFundAuthOrderAppFreezeModelRepository.findAll();
        assertThat(alipayFundAuthOrderAppFreezeModelList).hasSize(databaseSizeBeforeDelete - 1);
    }

    @Test
    @Transactional
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(AlipayFundAuthOrderAppFreezeModel.class);
        AlipayFundAuthOrderAppFreezeModel alipayFundAuthOrderAppFreezeModel1 = new AlipayFundAuthOrderAppFreezeModel();
        alipayFundAuthOrderAppFreezeModel1.setId(1L);
        AlipayFundAuthOrderAppFreezeModel alipayFundAuthOrderAppFreezeModel2 = new AlipayFundAuthOrderAppFreezeModel();
        alipayFundAuthOrderAppFreezeModel2.setId(alipayFundAuthOrderAppFreezeModel1.getId());
        assertThat(alipayFundAuthOrderAppFreezeModel1).isEqualTo(alipayFundAuthOrderAppFreezeModel2);
        alipayFundAuthOrderAppFreezeModel2.setId(2L);
        assertThat(alipayFundAuthOrderAppFreezeModel1).isNotEqualTo(alipayFundAuthOrderAppFreezeModel2);
        alipayFundAuthOrderAppFreezeModel1.setId(null);
        assertThat(alipayFundAuthOrderAppFreezeModel1).isNotEqualTo(alipayFundAuthOrderAppFreezeModel2);
    }
}
