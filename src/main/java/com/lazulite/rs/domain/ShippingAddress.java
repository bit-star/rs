package com.lazulite.rs.domain;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import io.swagger.annotations.ApiModel;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;

/**
 * not an ignored comment
 */
@ApiModel(description = "not an ignored comment")
@Entity
@Table(name = "shipping_address")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class ShippingAddress implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "receiver")
    private String receiver;

    @Column(name = "moblie")
    private String moblie;

    @Column(name = "address")
    private String address;

    @ManyToOne
    @JsonIgnoreProperties("shippingAddresses")
    private Pcr pcr;

    @ManyToOne
    @JsonIgnoreProperties("shippingAddresses")
    private AlipayUser alipayUser;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getReceiver() {
        return receiver;
    }

    public ShippingAddress receiver(String receiver) {
        this.receiver = receiver;
        return this;
    }

    public void setReceiver(String receiver) {
        this.receiver = receiver;
    }

    public String getMoblie() {
        return moblie;
    }

    public ShippingAddress moblie(String moblie) {
        this.moblie = moblie;
        return this;
    }

    public void setMoblie(String moblie) {
        this.moblie = moblie;
    }

    public String getAddress() {
        return address;
    }

    public ShippingAddress address(String address) {
        this.address = address;
        return this;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public Pcr getPcr() {
        return pcr;
    }

    public ShippingAddress pcr(Pcr pcr) {
        this.pcr = pcr;
        return this;
    }

    public void setPcr(Pcr pcr) {
        this.pcr = pcr;
    }

    public AlipayUser getAlipayUser() {
        return alipayUser;
    }

    public ShippingAddress alipayUser(AlipayUser alipayUser) {
        this.alipayUser = alipayUser;
        return this;
    }

    public void setAlipayUser(AlipayUser alipayUser) {
        this.alipayUser = alipayUser;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof ShippingAddress)) {
            return false;
        }
        return id != null && id.equals(((ShippingAddress) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    @Override
    public String toString() {
        return "ShippingAddress{" +
            "id=" + getId() +
            ", receiver='" + getReceiver() + "'" +
            ", moblie='" + getMoblie() + "'" +
            ", address='" + getAddress() + "'" +
            "}";
    }
}