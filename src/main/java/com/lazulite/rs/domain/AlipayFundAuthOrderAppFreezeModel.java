package com.lazulite.rs.domain;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;

/**
 * A AlipayFundAuthOrderAppFreezeModel.
 */
@Entity
@Table(name = "alipay_fund_auth_order_app_freeze_model")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class AlipayFundAuthOrderAppFreezeModel implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "order_title")
    private String orderTitle;

    @Column(name = "out_order_no")
    private String outOrderNo;

    @Column(name = "out_request_no")
    private String outRequestNo;

    @Column(name = "payee_user_id")
    private String payeeUserId;

    @Column(name = "payee_logon_id")
    private String payeeLogonId;

    @Column(name = "product_code")
    private String productCode;

    @Column(name = "amount")
    private String amount;

    @Column(name = "extra_param")
    private String extraParam;

    @Column(name = "notify_url")
    private String notifyUrl;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getOrderTitle() {
        return orderTitle;
    }

    public AlipayFundAuthOrderAppFreezeModel orderTitle(String orderTitle) {
        this.orderTitle = orderTitle;
        return this;
    }

    public void setOrderTitle(String orderTitle) {
        this.orderTitle = orderTitle;
    }

    public String getOutOrderNo() {
        return outOrderNo;
    }

    public AlipayFundAuthOrderAppFreezeModel outOrderNo(String outOrderNo) {
        this.outOrderNo = outOrderNo;
        return this;
    }

    public void setOutOrderNo(String outOrderNo) {
        this.outOrderNo = outOrderNo;
    }

    public String getOutRequestNo() {
        return outRequestNo;
    }

    public AlipayFundAuthOrderAppFreezeModel outRequestNo(String outRequestNo) {
        this.outRequestNo = outRequestNo;
        return this;
    }

    public void setOutRequestNo(String outRequestNo) {
        this.outRequestNo = outRequestNo;
    }

    public String getPayeeUserId() {
        return payeeUserId;
    }

    public AlipayFundAuthOrderAppFreezeModel payeeUserId(String payeeUserId) {
        this.payeeUserId = payeeUserId;
        return this;
    }

    public void setPayeeUserId(String payeeUserId) {
        this.payeeUserId = payeeUserId;
    }

    public String getPayeeLogonId() {
        return payeeLogonId;
    }

    public AlipayFundAuthOrderAppFreezeModel payeeLogonId(String payeeLogonId) {
        this.payeeLogonId = payeeLogonId;
        return this;
    }

    public void setPayeeLogonId(String payeeLogonId) {
        this.payeeLogonId = payeeLogonId;
    }

    public String getProductCode() {
        return productCode;
    }

    public AlipayFundAuthOrderAppFreezeModel productCode(String productCode) {
        this.productCode = productCode;
        return this;
    }

    public void setProductCode(String productCode) {
        this.productCode = productCode;
    }

    public String getAmount() {
        return amount;
    }

    public AlipayFundAuthOrderAppFreezeModel amount(String amount) {
        this.amount = amount;
        return this;
    }

    public void setAmount(String amount) {
        this.amount = amount;
    }

    public String getExtraParam() {
        return extraParam;
    }

    public AlipayFundAuthOrderAppFreezeModel extraParam(String extraParam) {
        this.extraParam = extraParam;
        return this;
    }

    public void setExtraParam(String extraParam) {
        this.extraParam = extraParam;
    }

    public String getNotifyUrl() {
        return notifyUrl;
    }

    public AlipayFundAuthOrderAppFreezeModel notifyUrl(String notifyUrl) {
        this.notifyUrl = notifyUrl;
        return this;
    }

    public void setNotifyUrl(String notifyUrl) {
        this.notifyUrl = notifyUrl;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof AlipayFundAuthOrderAppFreezeModel)) {
            return false;
        }
        return id != null && id.equals(((AlipayFundAuthOrderAppFreezeModel) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    @Override
    public String toString() {
        return "AlipayFundAuthOrderAppFreezeModel{" +
            "id=" + getId() +
            ", orderTitle='" + getOrderTitle() + "'" +
            ", outOrderNo='" + getOutOrderNo() + "'" +
            ", outRequestNo='" + getOutRequestNo() + "'" +
            ", payeeUserId='" + getPayeeUserId() + "'" +
            ", payeeLogonId='" + getPayeeLogonId() + "'" +
            ", productCode='" + getProductCode() + "'" +
            ", amount='" + getAmount() + "'" +
            ", extraParam='" + getExtraParam() + "'" +
            ", notifyUrl='" + getNotifyUrl() + "'" +
            "}";
    }
}
