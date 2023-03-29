package com.ComputerPartChecker.server.entity;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "cases")
@NamedEntityGraphs({
        @NamedEntityGraph(
                name = CasesEntity.CasesFetch.ALL,
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
public class CasesEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "pid")
    private Integer pid;

    @MapsId
    @OneToOne
    @JoinColumn(name = "pid", referencedColumnName = "pid", insertable = false, updatable = false)
    private PidRegistryEntity pidRegistryEntity;

    @Column(name = "type")
    private Integer type;

    @ManyToOne(cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.REFRESH, CascadeType.DETACH})
    @JoinColumn(name = "type", referencedColumnName = "id", insertable = false, updatable = false)
    private TypeCodesEntity typeCodesEntity;

    @Column(name = "powersupply")
    private Integer powerSupply;

    @Column(name = "sidepanelwindow")
    private Integer sidePanelWindow;

    @ManyToOne(cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.REFRESH, CascadeType.DETACH})
    @JoinColumn(name = "sidepanelwindow", referencedColumnName = "id", insertable = false, updatable = false)
    private SidePanelWindowCodesEntity sidePanelWindowCodesEntity;

    @Column(name = "powersupplyshroud")
    private Boolean powerSupplyShroud;

    @Column(name = "fullheightexpansionslots")
    private Integer fullHeightExpansionSlots;

    @Column(name = "halfheightexpansionslots")
    private Integer halfHeightExpansionSlots;

    @Column(name = "internal25bays")
    private Integer internal25Bays;

    @Column(name = "internal35bays")
    private Integer internal35Bays;

    @Column(name = "maxgraphicscardlength")
    private Double maxGraphicsCardLength;

    @Column(name = "maxgraphicscardlengthnodrivebay")
    private Integer maxGraphicsCardLengthNoDriveBay;

    @Column(name = "length")
    private Double length;

    @Column(name = "width")
    private Double width;

    @Column(name = "height")
    private Double height;

    @Column(name = "external525bays")
    private Integer external525Bays;

    @Column(name = "external35bays")
    private Integer external35Bays;

    @Column(name = "external525slimslotloadbays")
    private Integer external525SlimSlotLoadBays;

    @Column(name = "external25bays")
    private Integer external25Bays;

    @Column(name = "external525slimbays")
    private Integer external525Slimbays;

    @Column(name = "internal525bays")
    private Integer internal525Bays;

    @Column(name = "internal525slimslotloadbays")
    private Integer internal525SlimSlotLoadBays;

    public interface CasesFetch {
        String ALL = "CasesEntity.all";
    }
}
