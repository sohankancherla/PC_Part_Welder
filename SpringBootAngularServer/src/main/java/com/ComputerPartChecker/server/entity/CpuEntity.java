package com.ComputerPartChecker.server.entity;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "cpu")
@NamedEntityGraphs({
        @NamedEntityGraph(
                name = CpuEntity.CpuFetch.ALL,
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
public class CpuEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "pid")
    private Integer pid;

    @MapsId
    @OneToOne
    @JoinColumn(name = "pid", referencedColumnName = "pid", insertable = false, updatable = false)
    private PidRegistryEntity pidRegistryEntity;

    @Column(name = "corecount")
    private Integer coreCount;

    @Column(name = "coreclock")
    private Integer coreClock;

    @Column(name = "boostclock")
    private Integer boostClock;

    @Column(name = "tdp")
    private Integer tdp;

    @Column(name = "series")
    private Integer series;

    @ManyToOne(cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.REFRESH, CascadeType.DETACH})
    @JoinColumn(name = "series", referencedColumnName = "id", insertable = false, updatable = false)
    private SeriesCodesEntity seriesCodesEntity;

    @Column(name = "microarchitecture")
    private Integer microarchitecture;

    @ManyToOne(cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.REFRESH, CascadeType.DETACH})
    @JoinColumn(name = "microarchitecture", referencedColumnName = "id", insertable = false, updatable = false)
    private MicroarchitectureCodesEntity microarchitectureCodesEntity;

    @Column(name = "corefamily")
    private Integer coreFamily;

    @ManyToOne(cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.REFRESH, CascadeType.DETACH})
    @JoinColumn(name = "corefamily", referencedColumnName = "id", insertable = false, updatable = false)
    private CoreFamilyCodesEntity coreFamilyCodesEntity;

    @Column(name = "socket")
    private Integer socket;

    @ManyToOne(cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.REFRESH, CascadeType.DETACH})
    @JoinColumn(name = "socket", referencedColumnName = "id", insertable = false, updatable = false)
    private SocketCodesEntity socketCodesEntity;

    @Column(name = "maximumsupportedmemory")
    private Integer maximumSupportedMemory;

    @Column(name = "eccsupport")
    private Boolean eccSupport;

    @Column(name = "packaging")
    private Integer packaging;

    @ManyToOne(cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.REFRESH, CascadeType.DETACH})
    @JoinColumn(name = "packaging", referencedColumnName = "id", insertable = false, updatable = false)
    private PackagingCodesEntity packagingCodesEntity;

    @Column(name = "includescpucooler")
    private Boolean includesCpuCooler;

    @Column(name = "l1cache")
    private String l1Cache;

    @Column(name = "l2cache")
    private String l2Cache;

    @Column(name = "l3cache")
    private String l3Cache;

    @Column(name = "lithography")
    private Integer lithography;

    @Column(name = "simultaneousmultithreading")
    private Boolean simultaneousMultithreading;

    @Column(name = "integratedgraphics")
    private Integer integratedGraphics;

    @ManyToOne(cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.REFRESH, CascadeType.DETACH})
    @JoinColumn(name = "integratedgraphics", referencedColumnName = "id", insertable = false, updatable = false)
    private IntegratedGraphicsCodesEntity integratedGraphicsCodesEntity;

    public interface CpuFetch {
        String ALL = "CpuEntity.all";
    }
}
