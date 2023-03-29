package com.ComputerPartChecker.server.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "pricing")
@IdClass(PricingKey.class)
@NamedEntityGraphs({
        @NamedEntityGraph(
                name = PricingEntity.PricingFetch.ALL,
                includeAllAttributes = true,
                attributeNodes = @NamedAttributeNode(value = "pidRegistryEntity", subgraph = "subgraph.pidRegistryEntity"),
                subgraphs =
                        {
                                @NamedSubgraph(name = "subgraph.pidRegistryEntity",
                                        attributeNodes = @NamedAttributeNode(value = "manufacturerCodesEntity", subgraph = "subgraph.manufacturerCodesEntity")
                                ),
                                @NamedSubgraph(name = "subgraph.pidRegistryEntity",
                                        attributeNodes = @NamedAttributeNode(value = "colorCodesEntity", subgraph = "subgraph.colorCodesEntity")
                                ),
                        }
        )
})
public class PricingEntity {
    @Id
    @Column(name = "pid")
    private Integer pid;

    @JsonIgnore
    @MapsId
    @OneToOne
    @JoinColumn(name = "pid", referencedColumnName = "pid", insertable = false, updatable = false)
    private PidRegistryEntity pidRegistryEntity;

    @Id
    @Column(name = "merchant")
    private Integer merchant;

    @ManyToOne(cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.REFRESH, CascadeType.DETACH})
    @JoinColumn(name = "merchant", referencedColumnName = "id", insertable = false, updatable = false)
    private MerchantCodesEntity merchantCodesEntity;

    @Column(name = "availability")
    private Integer availability;

    @ManyToOne(cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.REFRESH, CascadeType.DETACH})
    @JoinColumn(name = "availability", referencedColumnName = "id", insertable = false, updatable = false)
    private AvailabilityCodesEntity availabilityCodesEntity;

    @Column(name = "total")
    private Double total;

    @JsonIgnore
    @ManyToOne(cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.REFRESH, CascadeType.DETACH})
    @JoinColumn(name = "pid", referencedColumnName = "pid", insertable = false, updatable = false)
    private PidRegistryEntity pidRegistryPricingEntity;

    public interface PricingFetch {
        String ALL = "PricingEntity.all";
    }
}
