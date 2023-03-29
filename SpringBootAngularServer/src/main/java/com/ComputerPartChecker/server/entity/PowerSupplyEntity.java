package com.ComputerPartChecker.server.entity;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "powersupply")
@NamedEntityGraphs({
        @NamedEntityGraph(
                name = PowerSupplyEntity.PowerSupplyFetch.ALL,
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
public class PowerSupplyEntity {
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

    @Column(name = "efficiencyrating")
    private Integer efficiencyRating;

    @ManyToOne(cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.REFRESH, CascadeType.DETACH})
    @JoinColumn(name = "efficiencyrating", referencedColumnName = "id", insertable = false, updatable = false)
    private EfficiencyRatingCodesEntity efficiencyRatingCodesEntity;

    @Column(name = "wattage")
    private Integer wattage;

    @Column(name = "length")
    private Integer length;

    @Column(name = "type")
    private Integer type;

    @ManyToOne(cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.REFRESH, CascadeType.DETACH})
    @JoinColumn(name = "type", referencedColumnName = "id", insertable = false, updatable = false)
    private TypeCodesEntity typeCodesEntity;

    @Column(name = "fanless")
    private Boolean fanless;

    @Column(name = "atxconnectors")
    private Integer atxConnectors;

    @Column(name = "epsconnectors")
    private Integer epsConnectors;

    @Column(name = "pcie12pinconnectors")
    private Integer pcie12PinConnectors;

    @Column(name = "pcie8pinconnectors")
    private Integer pcie8PinConnectors;

    @Column(name = "pcie62pinconnectors")
    private Integer pcie62PinConnectors;

    @Column(name = "pcie6pinconnectors")
    private Integer pcie6PinConnectors;

    @Column(name = "sataconnectors")
    private Integer sataConnectors;

    @Column(name = "molex4pinconnectors")
    private Integer molex4PinConnectors;

    @Column(name = "output")
    private String output;

    @Column(name = "efficiency")
    private String efficiency;

    public interface PowerSupplyFetch {
        String ALL = "PowerSupplyEntity.all";
    }
}
