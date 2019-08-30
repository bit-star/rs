package com.lazulite.rs.config;

import java.time.Duration;

import org.ehcache.config.builders.*;
import org.ehcache.jsr107.Eh107Configuration;

import org.hibernate.cache.jcache.ConfigSettings;
import io.github.jhipster.config.JHipsterProperties;

import org.springframework.boot.autoconfigure.cache.JCacheManagerCustomizer;
import org.springframework.boot.autoconfigure.orm.jpa.HibernatePropertiesCustomizer;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.context.annotation.*;

@Configuration
@EnableCaching
public class CacheConfiguration {

    private final javax.cache.configuration.Configuration<Object, Object> jcacheConfiguration;

    public CacheConfiguration(JHipsterProperties jHipsterProperties) {
        JHipsterProperties.Cache.Ehcache ehcache =
            jHipsterProperties.getCache().getEhcache();

        jcacheConfiguration = Eh107Configuration.fromEhcacheCacheConfiguration(
            CacheConfigurationBuilder.newCacheConfigurationBuilder(Object.class, Object.class,
                ResourcePoolsBuilder.heap(ehcache.getMaxEntries()))
                .withExpiry(ExpiryPolicyBuilder.timeToLiveExpiration(Duration.ofSeconds(ehcache.getTimeToLiveSeconds())))
                .build());
    }

    @Bean
    public HibernatePropertiesCustomizer hibernatePropertiesCustomizer(javax.cache.CacheManager cacheManager) {
        return hibernateProperties -> hibernateProperties.put(ConfigSettings.CACHE_MANAGER, cacheManager);
    }

    @Bean
    public JCacheManagerCustomizer cacheManagerCustomizer() {
        return cm -> {
            createCache(cm, com.lazulite.rs.repository.UserRepository.USERS_BY_LOGIN_CACHE);
            createCache(cm, com.lazulite.rs.repository.UserRepository.USERS_BY_EMAIL_CACHE);
            createCache(cm, com.lazulite.rs.domain.User.class.getName());
            createCache(cm, com.lazulite.rs.domain.Authority.class.getName());
            createCache(cm, com.lazulite.rs.domain.User.class.getName() + ".authorities");
            createCache(cm, com.lazulite.rs.domain.ShippingAddress.class.getName());
            createCache(cm, com.lazulite.rs.domain.Pcr.class.getName());
            createCache(cm, com.lazulite.rs.domain.Pcr.class.getName() + ".shippingAddresses");
            createCache(cm, com.lazulite.rs.domain.Commodity.class.getName());
            createCache(cm, com.lazulite.rs.domain.Commodity.class.getName() + ".photos");
            createCache(cm, com.lazulite.rs.domain.Commodity.class.getName() + ".specifications");
            createCache(cm, com.lazulite.rs.domain.Commodity.class.getName() + ".tags");
            createCache(cm, com.lazulite.rs.domain.Commodity.class.getName() + ".orderItems");
            createCache(cm, com.lazulite.rs.domain.Photo.class.getName());
            createCache(cm, com.lazulite.rs.domain.Specification.class.getName());
            createCache(cm, com.lazulite.rs.domain.Order.class.getName());
            createCache(cm, com.lazulite.rs.domain.Order.class.getName() + ".orderItems");
            createCache(cm, com.lazulite.rs.domain.OrderItem.class.getName());
            createCache(cm, com.lazulite.rs.domain.OrderItem.class.getName() + ".itemLeaseCycles");
            createCache(cm, com.lazulite.rs.domain.ItemLeaseCycle.class.getName());
            createCache(cm, com.lazulite.rs.domain.AlipayUser.class.getName());
            createCache(cm, com.lazulite.rs.domain.AlipayUser.class.getName() + ".orders");
            createCache(cm, com.lazulite.rs.domain.AlipayUser.class.getName() + ".shippingAddresses");
            createCache(cm, com.lazulite.rs.domain.Tag.class.getName());
            // jhipster-needle-ehcache-add-entry
        };
    }

    private void createCache(javax.cache.CacheManager cm, String cacheName) {
        javax.cache.Cache<Object, Object> cache = cm.getCache(cacheName);
        if (cache != null) {
            cm.destroyCache(cacheName);
        }
        cm.createCache(cacheName, jcacheConfiguration);
    }
}
