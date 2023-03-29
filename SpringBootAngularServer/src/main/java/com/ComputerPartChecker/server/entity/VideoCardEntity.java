package com.ComputerPartChecker.server.entity;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "videocard")
@NamedEntityGraphs({
        @NamedEntityGraph(
                name = VideoCardEntity.VideoCardFetch.ALL,
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
public class VideoCardEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "pid")
    private Integer pid;

    @MapsId
    @OneToOne
    @JoinColumn(name = "pid", referencedColumnName = "pid", insertable = false, updatable = false)
    private PidRegistryEntity pidRegistryEntity;

    @Column(name = "chipset")
    private Integer chipset;

    @ManyToOne(cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.REFRESH, CascadeType.DETACH})
    @JoinColumn(name = "chipset", referencedColumnName = "id", insertable = false, updatable = false)
    private ChipsetCodesEntity chipsetCodesEntity;

    @Column(name = "memory")
    private Double memory;

    @Column(name = "memorytype")
    private Integer memoryType;

    @ManyToOne(cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.REFRESH, CascadeType.DETACH})
    @JoinColumn(name = "memorytype", referencedColumnName = "id", insertable = false, updatable = false)
    private MemoryTypeCodesEntity memoryTypeCodesEntity;

    @Column(name = "coreclock")
    private Integer coreClock;

    @Column(name = "boostclock")
    private Integer boostClock;

    @Column(name = "effectivememoryclock")
    private Integer effectiveMemoryClock;

    @Column(name = "interface")
    private Integer interfaces;

    @ManyToOne(cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.REFRESH, CascadeType.DETACH})
    @JoinColumn(name = "interface", referencedColumnName = "id", insertable = false, updatable = false)
    private InterfaceCodesEntity interfaceCodesEntity;

    @Column(name = "framesync")
    private Integer frameSync;

    @ManyToOne(cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.REFRESH, CascadeType.DETACH})
    @JoinColumn(name = "framesync", referencedColumnName = "id", insertable = false, updatable = false)
    private FrameSyncCodesEntity frameSyncCodesEntity;

    @Column(name = "length")
    private Double length;

    @Column(name = "tdp")
    private Integer tdp;

    @Column(name = "dviports")
    private Integer dviPorts;

    @Column(name = "hdmiports")
    private Integer hdmiPorts;

    @Column(name = "minihdmiports")
    private Integer miniHdmiPorts;

    @Column(name = "displayportports")
    private Integer displayPortPorts;

    @Column(name = "minidisplayportports")
    private Integer miniDisplayPortPorts;

    @Column(name = "expansionslotwidth")
    private Integer expansionSlotWidth;

    @Column(name = "cooling")
    private Integer cooling;

    @Column(name = "externalpower")
    private Integer externalPower;

    @Column(name = "displayport")
    private Integer displayPort;

    @Column(name = "hdmi")
    private Integer hdmi;

    @Column(name = "dvidduallink")
    private Integer dvidDualLink;

    @Column(name = "vga")
    private Integer vga;

    @Column(name = "dviiduallink")
    private Integer dviiDualLink;

    @Column(name = "virtuallink")
    private Integer virtualLink;

    @Column(name = "dvidsinglelink")
    private Integer dvidSingleLink;

    @Column(name = "dvi")
    private Integer dvi;

    @Column(name = "minidisplayport")
    private Integer miniDisplayPort;

    @Column(name = "minihdmi")
    private Integer miniHdmi;

    @Column(name = "svideo")
    private Integer sVideo;

    @Column(name = "vhdci")
    private Integer vHdci;

    @Column(name = "dviisinglelink")
    private Integer dviiSingleLink;

    @Column(name = "dvia")
    private Integer dviA;

    public interface VideoCardFetch {
        String ALL = "VideoCardEntity.all";
    }
}
