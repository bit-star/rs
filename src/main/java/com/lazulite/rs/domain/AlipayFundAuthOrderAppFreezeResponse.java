package com.lazulite.rs.domain;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;

/**
 * A AlipayFundAuthOrderAppFreezeResponse.
 */
@Entity
@Table(name = "alipay_fund_auth_order_app_freeze_response")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class AlipayFundAuthOrderAppFreezeResponse implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "amount")
    private String amount;

    @Column(name = "auth_no")
    private String authNo;

    @Column(name = "credit_amount")
    private String creditAmount;

    @Column(name = "fund_amount")
    private String fundAmount;

    @Column(name = "gmt_trans")
    private String gmtTrans;

    @Column(name = "operation_id")
    private String operationId;

    @Column(name = "out_order_no")
    private String outOrderNo;

    @Column(name = "out_request_no")
    private String outRequestNo;

    @Column(name = "payer_user_id")
    private String payerUserId;

    @Column(name = "pre_auth_type")
    private String preAuthType;

    @Column(name = "status")
    private String status;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getAmount() {
        return amount;
    }

    public AlipayFundAuthOrderAppFreezeResponse amount(String amount) {
        this.amount = amount;
        return this;
    }

    public void setAmount(String amount) {
        this.amount = amount;
    }

    public String getAuthNo() {
        return authNo;
    }

    public AlipayFundAuthOrderAppFreezeResponse authNo(String authNo) {
        this.authNo = authNo;
        return this;
    }

    public void setAuthNo(String authNo) {
        this.authNo = authNo;
    }

    public String getCreditAmount() {
        return creditAmount;
    }

    public AlipayFundAuthOrderAppFreezeResponse creditAmount(String creditAmount) {
        this.creditAmount = creditAmount;
        return this;
    }

    public void setCreditAmount(String creditAmount) {
        this.creditAmount = creditAmount;
    }

    public String getFundAmount() {
        return fundAmount;
    }

    public AlipayFundAuthOrderAppFreezeResponse fundAmount(String fundAmount) {
        this.fundAmount = fundAmount;
        return this;
    }

    public void setFundAmount(String fundAmount) {
        this.fundAmount = fundAmount;
    }

    public String getGmtTrans() {
        return gmtTrans;
    }

    public AlipayFundAuthOrderAppFreezeResponse gmtTrans(String gmtTrans) {
        this.gmtTrans = gmtTrans;
        return this;
    }

    public void setGmtTrans(String gmtTrans) {
        this.gmtTrans = gmtTrans;
    }

    public String getOperationId() {
        return operationId;
    }

    public AlipayFundAuthOrderAppFreezeResponse operationId(String operationId) {
        this.operationId = operationId;
        return this;
    }

    public void setOperationId(String operationId) {
        this.operationId = operationId;
    }

    public String getOutOrderNo() {
        return outOrderNo;
    }

    public AlipayFundAuthOrderAppFreezeResponse outOrderNo(String outOrderNo) {
        this.outOrderNo = outOrderNo;
        return this;
    }

    public void setOutOrderNo(String outOrderNo) {
        this.outOrderNo = outOrderNo;
    }

    public String getOutRequestNo() {
        return outRequestNo;
    }

    public AlipayFundAuthOrderAppFreezeResponse outRequestNo(String outRequestNo) {
        this.outRequestNo = outRequestNo;
        return this;
    }

    public void setOutRequestNo(String outRequestNo) {
        this.outRequestNo = outRequestNo;
    }

    public String getPayerUserId() {
        return payerUserId;
    }

    public AlipayFundAuthOrderAppFreezeResponse payerUserId(String payerUserId) {
        this.payerUserId = payerUserId;
        return this;
    }

    public void setPayerUserId(String payerUserId) {
        this.payerUserId = payerUserId;
    }

    public String getPreAuthType() {
        return preAuthType;
    }

    public AlipayFundAuthOrderAppFreezeResponse preAuthType(String preAuthType) {
        this.preAuthType = preAuthType;
        return this;
    }

    public void setPreAuthType(String preAuthType) {
        this.preAuthType = preAuthType;
    }

    public String getStatus() {
        return status;
    }

    public AlipayFundAuthOrderAppFreezeResponse status(String status) {
        this.status = status;
        return this;
    }

    public void setStatus(String status) {
        this.status = status;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof AlipayFundAuthOrderAppFreezeResponse)) {
            return false;
        }
        return id != null && id.equals(((AlipayFundAuthOrderAppFreezeResponse) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    @Override
    public String toString() {
        return "AlipayFundAuthOrderAppFreezeResponse{" +
            "id=" + getId() +
            ", amount='" + getAmount() + "'" +
            ", authNo='" + getAuthNo() + "'" +
            ", creditAmount='" + getCreditAmount() + "'" +
            ", fundAmount='" + getFundAmount() + "'" +
            ", gmtTrans='" + getGmtTrans() + "'" +
            ", operationId='" + getOperationId() + "'" +
            ", outOrderNo='" + getOutOrderNo() + "'" +
            ", outRequestNo='" + getOutRequestNo() + "'" +
            ", payerUserId='" + getPayerUserId() + "'" +
            ", preAuthType='" + getPreAuthType() + "'" +
            ", status='" + getStatus() + "'" +
            "}";
    }
}
