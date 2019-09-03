package com.lazulite.rs.domain;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import io.swagger.annotations.ApiModelProperty;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.HashSet;
import java.util.Set;

import com.lazulite.rs.domain.enumeration.OrderStatus;

/**
 * A Order.
 */
@Entity
@Table(name = "jhi_order")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Order implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    /**
     * 订单编号
     */
    @ApiModelProperty(value = "订单编号")
    @Column(name = "order_no")
    private String orderNo;

    @Enumerated(EnumType.STRING)
    @Column(name = "status")
    private OrderStatus status;

    @Column(name = "receiver")
    private String receiver;

    @Column(name = "mobile")
    private String mobile;

    @Column(name = "province")
    private String province;

    @Column(name = "city")
    private String city;

    @Column(name = "region")
    private String region;

    @Column(name = "address")
    private String address;

    @Column(name = "store_name")
    private String storeName;

    @Column(name = "logistics_company")
    private String logisticsCompany;

    @Column(name = "shipment_number")
    private String shipmentNumber;

    @Column(name = "payment_method")
    private String paymentMethod;

    @Column(name = "freight", precision = 21, scale = 2)
    private BigDecimal freight;

    @Column(name = "description")
    private String description;

    @Column(name = "processing_opinions")
    private String processingOpinions;

    @OneToMany(mappedBy = "order")
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    private Set<OrderItem> orderItems = new HashSet<>();

    @OneToMany(mappedBy = "order")
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    private Set<AlipayFreezeRequest> alipayFreezeRequests = new HashSet<>();

    @OneToMany(mappedBy = "order")
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    private Set<AlipayFreezeResponse> alipayFreezeResponses = new HashSet<>();

    @ManyToOne
    @JsonIgnoreProperties("orders")
    private User user;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getOrderNo() {
        return orderNo;
    }

    public Order orderNo(String orderNo) {
        this.orderNo = orderNo;
        return this;
    }

    public void setOrderNo(String orderNo) {
        this.orderNo = orderNo;
    }

    public OrderStatus getStatus() {
        return status;
    }

    public Order status(OrderStatus status) {
        this.status = status;
        return this;
    }

    public void setStatus(OrderStatus status) {
        this.status = status;
    }

    public String getReceiver() {
        return receiver;
    }

    public Order receiver(String receiver) {
        this.receiver = receiver;
        return this;
    }

    public void setReceiver(String receiver) {
        this.receiver = receiver;
    }

    public String getMobile() {
        return mobile;
    }

    public Order mobile(String mobile) {
        this.mobile = mobile;
        return this;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public String getProvince() {
        return province;
    }

    public Order province(String province) {
        this.province = province;
        return this;
    }

    public void setProvince(String province) {
        this.province = province;
    }

    public String getCity() {
        return city;
    }

    public Order city(String city) {
        this.city = city;
        return this;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getRegion() {
        return region;
    }

    public Order region(String region) {
        this.region = region;
        return this;
    }

    public void setRegion(String region) {
        this.region = region;
    }

    public String getAddress() {
        return address;
    }

    public Order address(String address) {
        this.address = address;
        return this;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getStoreName() {
        return storeName;
    }

    public Order storeName(String storeName) {
        this.storeName = storeName;
        return this;
    }

    public void setStoreName(String storeName) {
        this.storeName = storeName;
    }

    public String getLogisticsCompany() {
        return logisticsCompany;
    }

    public Order logisticsCompany(String logisticsCompany) {
        this.logisticsCompany = logisticsCompany;
        return this;
    }

    public void setLogisticsCompany(String logisticsCompany) {
        this.logisticsCompany = logisticsCompany;
    }

    public String getShipmentNumber() {
        return shipmentNumber;
    }

    public Order shipmentNumber(String shipmentNumber) {
        this.shipmentNumber = shipmentNumber;
        return this;
    }

    public void setShipmentNumber(String shipmentNumber) {
        this.shipmentNumber = shipmentNumber;
    }

    public String getPaymentMethod() {
        return paymentMethod;
    }

    public Order paymentMethod(String paymentMethod) {
        this.paymentMethod = paymentMethod;
        return this;
    }

    public void setPaymentMethod(String paymentMethod) {
        this.paymentMethod = paymentMethod;
    }

    public BigDecimal getFreight() {
        return freight;
    }

    public Order freight(BigDecimal freight) {
        this.freight = freight;
        return this;
    }

    public void setFreight(BigDecimal freight) {
        this.freight = freight;
    }

    public String getDescription() {
        return description;
    }

    public Order description(String description) {
        this.description = description;
        return this;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getProcessingOpinions() {
        return processingOpinions;
    }

    public Order processingOpinions(String processingOpinions) {
        this.processingOpinions = processingOpinions;
        return this;
    }

    public void setProcessingOpinions(String processingOpinions) {
        this.processingOpinions = processingOpinions;
    }

    public Set<OrderItem> getOrderItems() {
        return orderItems;
    }

    public Order orderItems(Set<OrderItem> orderItems) {
        this.orderItems = orderItems;
        return this;
    }

    public Order addOrderItem(OrderItem orderItem) {
        this.orderItems.add(orderItem);
        orderItem.setOrder(this);
        return this;
    }

    public Order removeOrderItem(OrderItem orderItem) {
        this.orderItems.remove(orderItem);
        orderItem.setOrder(null);
        return this;
    }

    public void setOrderItems(Set<OrderItem> orderItems) {
        this.orderItems = orderItems;
    }

    public Set<AlipayFreezeRequest> getAlipayFreezeRequests() {
        return alipayFreezeRequests;
    }

    public Order alipayFreezeRequests(Set<AlipayFreezeRequest> alipayFreezeRequests) {
        this.alipayFreezeRequests = alipayFreezeRequests;
        return this;
    }

    public Order addAlipayFreezeRequest(AlipayFreezeRequest alipayFreezeRequest) {
        this.alipayFreezeRequests.add(alipayFreezeRequest);
        alipayFreezeRequest.setOrder(this);
        return this;
    }

    public Order removeAlipayFreezeRequest(AlipayFreezeRequest alipayFreezeRequest) {
        this.alipayFreezeRequests.remove(alipayFreezeRequest);
        alipayFreezeRequest.setOrder(null);
        return this;
    }

    public void setAlipayFreezeRequests(Set<AlipayFreezeRequest> alipayFreezeRequests) {
        this.alipayFreezeRequests = alipayFreezeRequests;
    }

    public Set<AlipayFreezeResponse> getAlipayFreezeResponses() {
        return alipayFreezeResponses;
    }

    public Order alipayFreezeResponses(Set<AlipayFreezeResponse> alipayFreezeResponses) {
        this.alipayFreezeResponses = alipayFreezeResponses;
        return this;
    }

    public Order addAlipayFreezeResponse(AlipayFreezeResponse alipayFreezeResponse) {
        this.alipayFreezeResponses.add(alipayFreezeResponse);
        alipayFreezeResponse.setOrder(this);
        return this;
    }

    public Order removeAlipayFreezeResponse(AlipayFreezeResponse alipayFreezeResponse) {
        this.alipayFreezeResponses.remove(alipayFreezeResponse);
        alipayFreezeResponse.setOrder(null);
        return this;
    }

    public void setAlipayFreezeResponses(Set<AlipayFreezeResponse> alipayFreezeResponses) {
        this.alipayFreezeResponses = alipayFreezeResponses;
    }

    public User getUser() {
        return user;
    }

    public Order user(User user) {
        this.user = user;
        return this;
    }

    public void setUser(User user) {
        this.user = user;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Order)) {
            return false;
        }
        return id != null && id.equals(((Order) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    @Override
    public String toString() {
        return "Order{" +
            "id=" + getId() +
            ", orderNo='" + getOrderNo() + "'" +
            ", status='" + getStatus() + "'" +
            ", receiver='" + getReceiver() + "'" +
            ", mobile='" + getMobile() + "'" +
            ", province='" + getProvince() + "'" +
            ", city='" + getCity() + "'" +
            ", region='" + getRegion() + "'" +
            ", address='" + getAddress() + "'" +
            ", storeName='" + getStoreName() + "'" +
            ", logisticsCompany='" + getLogisticsCompany() + "'" +
            ", shipmentNumber='" + getShipmentNumber() + "'" +
            ", paymentMethod='" + getPaymentMethod() + "'" +
            ", freight=" + getFreight() +
            ", description='" + getDescription() + "'" +
            ", processingOpinions='" + getProcessingOpinions() + "'" +
            "}";
    }
}
