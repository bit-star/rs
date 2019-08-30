package com.lazulite.rs.web.rest;

import com.lazulite.rs.RsApp;
import com.lazulite.rs.domain.Pcr;
import com.lazulite.rs.repository.PcrRepository;
import com.lazulite.rs.service.PcrService;
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
 * Integration tests for the {@link PcrResource} REST controller.
 */
@SpringBootTest(classes = RsApp.class)
public class PcrResourceIT {

    private static final String DEFAULT_NAME = "AAAAAAAAAA";
    private static final String UPDATED_NAME = "BBBBBBBBBB";

    private static final Long DEFAULT_PARENT_ID = 1L;
    private static final Long UPDATED_PARENT_ID = 2L;
    private static final Long SMALLER_PARENT_ID = 1L - 1L;

    private static final String DEFAULT_ALIAS = "AAAAAAAAAA";
    private static final String UPDATED_ALIAS = "BBBBBBBBBB";

    private static final Long DEFAULT_LEVEL = 1L;
    private static final Long UPDATED_LEVEL = 2L;
    private static final Long SMALLER_LEVEL = 1L - 1L;

    private static final String DEFAULT_PHONE_AREA_CODE = "AAAAAAAAAA";
    private static final String UPDATED_PHONE_AREA_CODE = "BBBBBBBBBB";

    private static final Long DEFAULT_ZIP = 1L;
    private static final Long UPDATED_ZIP = 2L;
    private static final Long SMALLER_ZIP = 1L - 1L;

    private static final String DEFAULT_PINYIN = "AAAAAAAAAA";
    private static final String UPDATED_PINYIN = "BBBBBBBBBB";

    @Autowired
    private PcrRepository pcrRepository;

    @Autowired
    private PcrService pcrService;

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

    private MockMvc restPcrMockMvc;

    private Pcr pcr;

    @BeforeEach
    public void setup() {
        MockitoAnnotations.initMocks(this);
        final PcrResource pcrResource = new PcrResource(pcrService);
        this.restPcrMockMvc = MockMvcBuilders.standaloneSetup(pcrResource)
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
    public static Pcr createEntity(EntityManager em) {
        Pcr pcr = new Pcr()
            .name(DEFAULT_NAME)
            .parentId(DEFAULT_PARENT_ID)
            .alias(DEFAULT_ALIAS)
            .level(DEFAULT_LEVEL)
            .phoneAreaCode(DEFAULT_PHONE_AREA_CODE)
            .zip(DEFAULT_ZIP)
            .pinyin(DEFAULT_PINYIN);
        return pcr;
    }
    /**
     * Create an updated entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static Pcr createUpdatedEntity(EntityManager em) {
        Pcr pcr = new Pcr()
            .name(UPDATED_NAME)
            .parentId(UPDATED_PARENT_ID)
            .alias(UPDATED_ALIAS)
            .level(UPDATED_LEVEL)
            .phoneAreaCode(UPDATED_PHONE_AREA_CODE)
            .zip(UPDATED_ZIP)
            .pinyin(UPDATED_PINYIN);
        return pcr;
    }

    @BeforeEach
    public void initTest() {
        pcr = createEntity(em);
    }

    @Test
    @Transactional
    public void createPcr() throws Exception {
        int databaseSizeBeforeCreate = pcrRepository.findAll().size();

        // Create the Pcr
        restPcrMockMvc.perform(post("/api/pcrs")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(pcr)))
            .andExpect(status().isCreated());

        // Validate the Pcr in the database
        List<Pcr> pcrList = pcrRepository.findAll();
        assertThat(pcrList).hasSize(databaseSizeBeforeCreate + 1);
        Pcr testPcr = pcrList.get(pcrList.size() - 1);
        assertThat(testPcr.getName()).isEqualTo(DEFAULT_NAME);
        assertThat(testPcr.getParentId()).isEqualTo(DEFAULT_PARENT_ID);
        assertThat(testPcr.getAlias()).isEqualTo(DEFAULT_ALIAS);
        assertThat(testPcr.getLevel()).isEqualTo(DEFAULT_LEVEL);
        assertThat(testPcr.getPhoneAreaCode()).isEqualTo(DEFAULT_PHONE_AREA_CODE);
        assertThat(testPcr.getZip()).isEqualTo(DEFAULT_ZIP);
        assertThat(testPcr.getPinyin()).isEqualTo(DEFAULT_PINYIN);
    }

    @Test
    @Transactional
    public void createPcrWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = pcrRepository.findAll().size();

        // Create the Pcr with an existing ID
        pcr.setId(1L);

        // An entity with an existing ID cannot be created, so this API call must fail
        restPcrMockMvc.perform(post("/api/pcrs")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(pcr)))
            .andExpect(status().isBadRequest());

        // Validate the Pcr in the database
        List<Pcr> pcrList = pcrRepository.findAll();
        assertThat(pcrList).hasSize(databaseSizeBeforeCreate);
    }


    @Test
    @Transactional
    public void getAllPcrs() throws Exception {
        // Initialize the database
        pcrRepository.saveAndFlush(pcr);

        // Get all the pcrList
        restPcrMockMvc.perform(get("/api/pcrs?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(pcr.getId().intValue())))
            .andExpect(jsonPath("$.[*].name").value(hasItem(DEFAULT_NAME.toString())))
            .andExpect(jsonPath("$.[*].parentId").value(hasItem(DEFAULT_PARENT_ID.intValue())))
            .andExpect(jsonPath("$.[*].alias").value(hasItem(DEFAULT_ALIAS.toString())))
            .andExpect(jsonPath("$.[*].level").value(hasItem(DEFAULT_LEVEL.intValue())))
            .andExpect(jsonPath("$.[*].phoneAreaCode").value(hasItem(DEFAULT_PHONE_AREA_CODE.toString())))
            .andExpect(jsonPath("$.[*].zip").value(hasItem(DEFAULT_ZIP.intValue())))
            .andExpect(jsonPath("$.[*].pinyin").value(hasItem(DEFAULT_PINYIN.toString())));
    }
    
    @Test
    @Transactional
    public void getPcr() throws Exception {
        // Initialize the database
        pcrRepository.saveAndFlush(pcr);

        // Get the pcr
        restPcrMockMvc.perform(get("/api/pcrs/{id}", pcr.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.id").value(pcr.getId().intValue()))
            .andExpect(jsonPath("$.name").value(DEFAULT_NAME.toString()))
            .andExpect(jsonPath("$.parentId").value(DEFAULT_PARENT_ID.intValue()))
            .andExpect(jsonPath("$.alias").value(DEFAULT_ALIAS.toString()))
            .andExpect(jsonPath("$.level").value(DEFAULT_LEVEL.intValue()))
            .andExpect(jsonPath("$.phoneAreaCode").value(DEFAULT_PHONE_AREA_CODE.toString()))
            .andExpect(jsonPath("$.zip").value(DEFAULT_ZIP.intValue()))
            .andExpect(jsonPath("$.pinyin").value(DEFAULT_PINYIN.toString()));
    }

    @Test
    @Transactional
    public void getNonExistingPcr() throws Exception {
        // Get the pcr
        restPcrMockMvc.perform(get("/api/pcrs/{id}", Long.MAX_VALUE))
            .andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    public void updatePcr() throws Exception {
        // Initialize the database
        pcrService.save(pcr);

        int databaseSizeBeforeUpdate = pcrRepository.findAll().size();

        // Update the pcr
        Pcr updatedPcr = pcrRepository.findById(pcr.getId()).get();
        // Disconnect from session so that the updates on updatedPcr are not directly saved in db
        em.detach(updatedPcr);
        updatedPcr
            .name(UPDATED_NAME)
            .parentId(UPDATED_PARENT_ID)
            .alias(UPDATED_ALIAS)
            .level(UPDATED_LEVEL)
            .phoneAreaCode(UPDATED_PHONE_AREA_CODE)
            .zip(UPDATED_ZIP)
            .pinyin(UPDATED_PINYIN);

        restPcrMockMvc.perform(put("/api/pcrs")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(updatedPcr)))
            .andExpect(status().isOk());

        // Validate the Pcr in the database
        List<Pcr> pcrList = pcrRepository.findAll();
        assertThat(pcrList).hasSize(databaseSizeBeforeUpdate);
        Pcr testPcr = pcrList.get(pcrList.size() - 1);
        assertThat(testPcr.getName()).isEqualTo(UPDATED_NAME);
        assertThat(testPcr.getParentId()).isEqualTo(UPDATED_PARENT_ID);
        assertThat(testPcr.getAlias()).isEqualTo(UPDATED_ALIAS);
        assertThat(testPcr.getLevel()).isEqualTo(UPDATED_LEVEL);
        assertThat(testPcr.getPhoneAreaCode()).isEqualTo(UPDATED_PHONE_AREA_CODE);
        assertThat(testPcr.getZip()).isEqualTo(UPDATED_ZIP);
        assertThat(testPcr.getPinyin()).isEqualTo(UPDATED_PINYIN);
    }

    @Test
    @Transactional
    public void updateNonExistingPcr() throws Exception {
        int databaseSizeBeforeUpdate = pcrRepository.findAll().size();

        // Create the Pcr

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restPcrMockMvc.perform(put("/api/pcrs")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(pcr)))
            .andExpect(status().isBadRequest());

        // Validate the Pcr in the database
        List<Pcr> pcrList = pcrRepository.findAll();
        assertThat(pcrList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    public void deletePcr() throws Exception {
        // Initialize the database
        pcrService.save(pcr);

        int databaseSizeBeforeDelete = pcrRepository.findAll().size();

        // Delete the pcr
        restPcrMockMvc.perform(delete("/api/pcrs/{id}", pcr.getId())
            .accept(TestUtil.APPLICATION_JSON_UTF8))
            .andExpect(status().isNoContent());

        // Validate the database contains one less item
        List<Pcr> pcrList = pcrRepository.findAll();
        assertThat(pcrList).hasSize(databaseSizeBeforeDelete - 1);
    }

    @Test
    @Transactional
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(Pcr.class);
        Pcr pcr1 = new Pcr();
        pcr1.setId(1L);
        Pcr pcr2 = new Pcr();
        pcr2.setId(pcr1.getId());
        assertThat(pcr1).isEqualTo(pcr2);
        pcr2.setId(2L);
        assertThat(pcr1).isNotEqualTo(pcr2);
        pcr1.setId(null);
        assertThat(pcr1).isNotEqualTo(pcr2);
    }
}
