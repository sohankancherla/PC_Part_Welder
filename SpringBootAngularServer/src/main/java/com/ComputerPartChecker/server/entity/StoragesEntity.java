package com.ComputerPartChecker.server.entity;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "storages")
@NamedEntityGraphs({
        @NamedEntityGraph(
                name = StoragesEntity.StoragesFetch.ALL,
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
                                @NamedSubgraph(name = "subgraph.pidRegistryEntity",
                                        attributeNodes = @NamedAttributeNode(value = "pricingEntities", subgraph = "subgraph.pricingEntities")
                                ),
                                @NamedSubgraph(name = "subgraph.pricingEntities",
                                        attributeNodes = @NamedAttributeNode(value = "merchantCodesEntity")
                                ),
                                @NamedSubgraph(name = "subgraph.pricingEntities",
                                        attributeNodes = @NamedAttributeNode(value = "availabilityCodesEntity")
                                )
                        }
        )
})
public class StoragesEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "pid")
    private Integer pid;

    @MapsId
    @OneToOne
    @JoinColumn(name = "pid", referencedColumnName = "pid", insertable = false, updatable = false)
    private PidRegistryEntity pidRegistryEntity;

    @Column(name = "capacity")
    private Double capacity;

    @Column(name = "pricepergb")
    private Double pricePerGb;

    @Column(name = "type")
    private String type;

    @Column(name = "cache")
    private Integer cache;

    @Column(name = "formfactor")
    private String formFactor;

    @Column(name = "interface")
    private String interfaces;

    @Column(name = "nvme")
    private Boolean nvme;

    @Column(name = "ssdnandflashtype")
    private String ssdNandFlashType;

    @Column(name = "hybridssdcache")
    private String hybridSsdCache;

    @Column(name = "ssdcontroller")
    private String ssdController;

    @Column(name = "powerlossprotection")
    private Boolean powerLossProtection;

    public interface StoragesFetch {
        String ALL = "StoragesEntity.all";
    }
}
