package com.ComputerPartChecker.server.entity;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "motherboard")
@NamedEntityGraphs({
        @NamedEntityGraph(
                name = MotherboardEntity.MotherboardFetch.ALL,
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
        ),
        @NamedEntityGraph(name = MotherboardEntity.MotherboardFetch.MOTHERBOARD_FORM_FACTOR_CODES, attributeNodes = {@NamedAttributeNode("motherboardFormFactorCodesEntity")})
})
public class MotherboardEntity {
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

    @Column(name = "memorymax")
    private Integer memoryMax;

    @Column(name = "memorytype")
    private Integer memoryType;

    @ManyToOne(cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.REFRESH, CascadeType.DETACH})
    @JoinColumn(name = "memorytype", referencedColumnName = "id", insertable = false, updatable = false)
    private MemoryTypeCodesEntity memoryTypeCodesEntity;

    @Column(name = "memoryslots")
    private Integer memorySlots;

    @Column(name = "pciex16slots")
    private Integer pciex16Slots;

    @Column(name = "pciex8slots")
    private Integer pciex8Slots;

    @Column(name = "pciex4slots")
    private Integer pciex4Slots;

    @Column(name = "pciex1slots")
    private Integer pciex1Slots;

    @Column(name = "pcislots")
    private Integer pciSlots;

    @Column(name = "m2slots")
    private String m2Slots;

    @Column(name = "minipcie")
    private Integer miniPcie;

    @Column(name = "halfminipcieslots")
    private Integer halfMiniPcieSlots;

    @Column(name = "msataslots")
    private Integer mSataSlots;

    @Column(name = "onboardethernet")
    private String onBoardEthernet;

    @Column(name = "sata6gb")
    private Integer sata6Gb;

    @Column(name = "onboardvideo")
    private String onBoardVideo;

    @Column(name = "usb20headers")
    private Integer usb20Headers;

    @Column(name = "usb20headerssingleport")
    private Integer usb20HeadersSinglePort;

    @Column(name = "usb30gen1headers")
    private Integer usb30gen1Headers;

    @Column(name = "usb32gen1headers")
    private Integer usb32Gen1Headers;

    @Column(name = "usb32gen2x2headers")
    private Integer usb32Gen2x2Headers;

    @Column(name = "supportsecc")
    private Boolean supportsEcc;

    @Column(name = "wirelessnetworking")
    private String wirelessNetworking;

    @Column(name = "raidsupport")
    private Boolean raidSupport;

    @Column(name = "memoryspeedmin")
    private Integer memorySpeedMin;

    @Column(name = "memoryspeedmax")
    private Integer memorySpeedMax;

    @Column(name = "socket")
    private Integer socket;

    @ManyToOne(cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.REFRESH, CascadeType.DETACH})
    @JoinColumn(name = "socket", referencedColumnName = "id", insertable = false, updatable = false)
    private SocketCodesEntity socketCodesEntity;

    @Column(name = "motherboardformfactor")
    private Integer motherboardFormFactor;

    @ManyToOne(cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.REFRESH, CascadeType.DETACH})
    @JoinColumn(name = "motherboardformfactor", referencedColumnName = "id", insertable = false, updatable = false)
    private MotherboardFormFactorCodesEntity motherboardFormFactorCodesEntity;

    @Column(name = "pata100")
    private Integer pata100;

    @Column(name = "sata3gb")
    private Integer sata3Gb;

    @Column(name = "u2")
    private Integer u2;

    @Column(name = "pata133")
    private Integer pata133;

    @Column(name = "sas12gb")
    private Integer sas12Gb;

    @Column(name = "sas3gb")
    private Integer sas3Gb;

    @Column(name = "sas6gb")
    private Integer sas6Gb;

    @Column(name = "sata15")
    private Integer sata15;

    public interface MotherboardFetch {
        String ALL = "MotherboardEntity.all";
        String MOTHERBOARD_FORM_FACTOR_CODES = "MotherboardEntity.motherboardFormFactorCodesEntity";
    }
}
