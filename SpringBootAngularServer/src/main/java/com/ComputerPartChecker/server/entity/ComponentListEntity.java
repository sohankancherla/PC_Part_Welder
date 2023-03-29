package com.ComputerPartChecker.server.entity;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;

@Data
@Entity
@Table(name = "componentlist")
@IdClass(ComponentListKey.class)
@NamedEntityGraphs({
        @NamedEntityGraph(
                name = ComponentListEntity.ComponentListFetch.ALL,
                includeAllAttributes = true,
                attributeNodes = {
                        @NamedAttributeNode(value = "pidRegistryEntity", subgraph = "subgraph.pidRegistryEntity"),
                        @NamedAttributeNode(value = "pricingEntity", subgraph = "subgraph.pricingEntity")
                },
                subgraphs =
                        {
                                @NamedSubgraph(name = "subgraph.pidRegistryEntity",
                                        attributeNodes = @NamedAttributeNode(value = "manufacturerCodesEntity", subgraph = "subgraph.manufacturerCodesEntity")
                                ),
                                @NamedSubgraph(name = "subgraph.pidRegistryEntity",
                                        attributeNodes = @NamedAttributeNode(value = "colorCodesEntity", subgraph = "subgraph.colorCodesEntity")
                                ),
                                @NamedSubgraph(name = "subgraph.pidRegistryEntity",
                                        attributeNodes = @NamedAttributeNode(value = "pricingEntities", subgraph = "subgraph.pricingEntities")
                                ),
                                @NamedSubgraph(name = "subgraph.pricingEntities",
                                        attributeNodes = @NamedAttributeNode(value = "merchantCodesEntity")
                                ),
                                @NamedSubgraph(name = "subgraph.pricingEntities",
                                        attributeNodes = @NamedAttributeNode(value = "availabilityCodesEntity")
                                ),
                                @NamedSubgraph(name = "subgraph.pricingEntity",
                                        attributeNodes = @NamedAttributeNode(value = "merchantCodesEntity")
                                ),
                                @NamedSubgraph(name = "subgraph.pricingEntity",
                                        attributeNodes = @NamedAttributeNode(value = "availabilityCodesEntity")
                                ),
                        }
        )
})
public class ComponentListEntity {
    @Id
    @Column(name = "pid")
    private Integer pid;

    @MapsId
    @OneToOne
    @JoinColumn(name = "pid", referencedColumnName = "pid", insertable = false, updatable = false)
    private PidRegistryEntity pidRegistryEntity;

    @Id
    @Column(name = "computer_id")
    private Integer cid;

    @Id
    @Column(name = "merchant")
    private Integer merchant;

    @MapsId
    @OneToOne
    @JoinColumns({
            @JoinColumn(name="pid", referencedColumnName="pid", insertable = false, updatable = false),
            @JoinColumn(name="merchant", referencedColumnName="merchant", insertable = false, updatable = false)
    })
    private PricingEntity pricingEntity;

    @Column(name = "count")
    private Integer count;

    public interface ComponentListFetch {
        String ALL = "ComponentListEntity.all";
    }
}
