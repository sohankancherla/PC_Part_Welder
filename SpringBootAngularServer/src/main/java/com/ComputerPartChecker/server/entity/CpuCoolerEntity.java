package com.ComputerPartChecker.server.entity;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "cpucooler")
@NamedEntityGraphs({
        @NamedEntityGraph(
                name = CpuCoolerEntity.CpuCoolerFetch.ALL,
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
public class CpuCoolerEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "pid")
    private Integer pid;

    @MapsId
    @OneToOne
    @JoinColumn(name = "pid", referencedColumnName = "pid", insertable = false, updatable = false)
    private PidRegistryEntity pidRegistryEntity;

    @Column(name = "height")
    private Double height;

    @Column(name = "fanless")
    private Boolean fanless;

    @Column(name = "fanrpmmin")
    private Integer fanRpmMin;

    @Column(name = "fanrpmmax")
    private Integer fanRpmMax;

    @Column(name = "noiselevelmin")
    private Double noiseLevelMin;

    @Column(name = "noiselevelmax")
    private Double noiseLevelMax;

    @Column(name = "bearing")
    private Integer bearing;

    @ManyToOne(cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.REFRESH, CascadeType.DETACH})
    @JoinColumn(name = "bearing", referencedColumnName = "id", insertable = false, updatable = false)
    private BearingCodesEntity bearingCodesEntity;

    @Column(name = "watercoolerradiator")
    private Integer waterCoolerRadiator;

    public interface CpuCoolerFetch {
        String ALL = "CpuCoolerEntity.all";
    }
}
