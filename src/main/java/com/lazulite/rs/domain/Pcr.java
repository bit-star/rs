package com.lazulite.rs.domain;
import io.swagger.annotations.ApiModel;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

/**
 * 省市区
 */
@ApiModel(description = "省市区")
@Entity
@Table(name = "pcr")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Pcr implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "parent_id")
    private Long parentId;

    @Column(name = "alias")
    private String alias;

    @Column(name = "level")
    private Long level;

    @Column(name = "phone_area_code")
    private String phoneAreaCode;

    @Column(name = "zip")
    private Long zip;

    @Column(name = "pinyin")
    private String pinyin;

    @OneToMany(mappedBy = "pcr")
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    private Set<ShippingAddress> shippingAddresses = new HashSet<>();

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public Pcr name(String name) {
        this.name = name;
        return this;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Long getParentId() {
        return parentId;
    }

    public Pcr parentId(Long parentId) {
        this.parentId = parentId;
        return this;
    }

    public void setParentId(Long parentId) {
        this.parentId = parentId;
    }

    public String getAlias() {
        return alias;
    }

    public Pcr alias(String alias) {
        this.alias = alias;
        return this;
    }

    public void setAlias(String alias) {
        this.alias = alias;
    }

    public Long getLevel() {
        return level;
    }

    public Pcr level(Long level) {
        this.level = level;
        return this;
    }

    public void setLevel(Long level) {
        this.level = level;
    }

    public String getPhoneAreaCode() {
        return phoneAreaCode;
    }

    public Pcr phoneAreaCode(String phoneAreaCode) {
        this.phoneAreaCode = phoneAreaCode;
        return this;
    }

    public void setPhoneAreaCode(String phoneAreaCode) {
        this.phoneAreaCode = phoneAreaCode;
    }

    public Long getZip() {
        return zip;
    }

    public Pcr zip(Long zip) {
        this.zip = zip;
        return this;
    }

    public void setZip(Long zip) {
        this.zip = zip;
    }

    public String getPinyin() {
        return pinyin;
    }

    public Pcr pinyin(String pinyin) {
        this.pinyin = pinyin;
        return this;
    }

    public void setPinyin(String pinyin) {
        this.pinyin = pinyin;
    }

    public Set<ShippingAddress> getShippingAddresses() {
        return shippingAddresses;
    }

    public Pcr shippingAddresses(Set<ShippingAddress> shippingAddresses) {
        this.shippingAddresses = shippingAddresses;
        return this;
    }

    public Pcr addShippingAddress(ShippingAddress shippingAddress) {
        this.shippingAddresses.add(shippingAddress);
        shippingAddress.setPcr(this);
        return this;
    }

    public Pcr removeShippingAddress(ShippingAddress shippingAddress) {
        this.shippingAddresses.remove(shippingAddress);
        shippingAddress.setPcr(null);
        return this;
    }

    public void setShippingAddresses(Set<ShippingAddress> shippingAddresses) {
        this.shippingAddresses = shippingAddresses;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Pcr)) {
            return false;
        }
        return id != null && id.equals(((Pcr) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    @Override
    public String toString() {
        return "Pcr{" +
            "id=" + getId() +
            ", name='" + getName() + "'" +
            ", parentId=" + getParentId() +
            ", alias='" + getAlias() + "'" +
            ", level=" + getLevel() +
            ", phoneAreaCode='" + getPhoneAreaCode() + "'" +
            ", zip=" + getZip() +
            ", pinyin='" + getPinyin() + "'" +
            "}";
    }
}
