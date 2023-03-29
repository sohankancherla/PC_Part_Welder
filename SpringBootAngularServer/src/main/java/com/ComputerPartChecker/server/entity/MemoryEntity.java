package com.ComputerPartChecker.server.entity;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "memory")
@NamedEntityGraphs({
        @NamedEntityGraph(
                name = MemoryEntity.MemoryFetch.ALL,
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
public class MemoryEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "pid")
    private Integer pid;

    @MapsId
    @OneToOne
    @JoinColumn(name = "pid", referencedColumnName = "pid", insertable = false, updatable = false)
    private PidRegistryEntity pidRegistryEntity;

    @Column(name = "formfactor")
    private Integer formFactor;

    @ManyToOne(cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.REFRESH, CascadeType.DETACH})
    @JoinColumn(name = "formfactor", referencedColumnName = "id", insertable = false, updatable = false)
    private FormFactorCodesEntity formFactorCodesEntity;

    @Column(name = "modules")
    private Integer modules;

    @Column(name = "pricepergb")
    private Double pricePerGb;

    @Column(name = "firstwordlatency")
    private Double firstWordLatency;

    @Column(name = "voltage")
    private Double voltage;

    @Column(name = "eccregistered")
    private Integer eccRegistered;

    @ManyToOne(cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.REFRESH, CascadeType.DETACH})
    @JoinColumn(name = "eccregistered", referencedColumnName = "id", insertable = false, updatable = false)
    private EccRegisteredCodesEntity eccRegisteredCodesEntity;

    @Column(name = "heatspreader")
    private Boolean heatSpreader;

    @Column(name = "memorytype")
    private Integer memoryType;

    @ManyToOne(cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.REFRESH, CascadeType.DETACH})
    @JoinColumn(name = "memorytype", referencedColumnName = "id", insertable = false, updatable = false)
    private MemoryTypeCodesEntity memoryTypeCodesEntity;

    @Column(name = "memoryspeed")
    private Integer memorySpeed;

    @Column(name = "capacity")
    private Integer capacity;

    @Column(name = "cl")
    private Integer cl;

    @Column(name = "trcd")
    private Integer trcd;

    @Column(name = "trp")
    private Integer trp;

    @Column(name = "tras")
    private Integer tras;

    public interface MemoryFetch {
        String ALL = "MemoryEntity.all";
    }
}
