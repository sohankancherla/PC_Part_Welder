package com.ComputerPartChecker.server.entity;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Data
@Entity
@Table(name = "pidregistry")
@NamedEntityGraphs({
        @NamedEntityGraph(name = PidRegistryEntity.PidRegistryFetch.ALL, includeAllAttributes = true)
})
public class PidRegistryEntity implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "pidregistry_pid_generator")
    @SequenceGenerator(name = "pidregistry_pid_generator", sequenceName = "pidregistry_pid_seq", allocationSize = 1)
    @Column(name = "pid")
    private Integer pid;

    @OneToMany(mappedBy = "pidRegistryPricingEntity")
    private List<PricingEntity> pricingEntities;

    @Column(name = "producttype")
    private String productType;

    @Column(name = "productname")
    private String productName;

    @Column(name = "manufacturer")
    private Integer manufacturer;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "manufacturer", referencedColumnName = "id", insertable = false, updatable = false)
    private ManufacturerCodesEntity manufacturerCodesEntity;

    @Column(name = "partnumber")
    private String partNumber;

    @Column(name = "color")
    private Integer color;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "color", referencedColumnName = "id", insertable = false, updatable = false)
    private ColorCodesEntity colorCodesEntity;

    // causing errors on update, exception occurs due to optional false, but is needed to implement lazy loading
    /*
    @JsonIgnore
    @OneToOne(cascade = CascadeType.ALL, mappedBy = "pidRegistryEntity", orphanRemoval = true, fetch = FetchType.LAZY, optional = false)
    private MotherboardEntity motherboardEntity;

    @JsonIgnore
    @OneToOne(cascade = CascadeType.ALL, mappedBy = "pidRegistryEntity", orphanRemoval = true, fetch = FetchType.LAZY, optional = false)
    private MemoryEntity memoryEntity;

    @JsonIgnore
    @OneToOne(cascade = CascadeType.ALL, mappedBy = "pidRegistryEntity", orphanRemoval = true, fetch = FetchType.LAZY, optional = false)
    private CasesEntity casesEntity;

    @JsonIgnore
    @OneToOne(cascade = CascadeType.ALL, mappedBy = "pidRegistryEntity", orphanRemoval = true, fetch = FetchType.LAZY, optional = false)
    private CpuCoolerEntity cpuCoolerEntity;

    @JsonIgnore
    @OneToOne(cascade = CascadeType.ALL, mappedBy = "pidRegistryEntity", orphanRemoval = true, fetch = FetchType.LAZY, optional = false)
    private CpuEntity cpuEntity;

    @JsonIgnore
    @OneToOne(cascade = CascadeType.ALL, mappedBy = "pidRegistryEntity", orphanRemoval = true, fetch = FetchType.LAZY, optional = false)
    private PowerSupplyEntity powerSupplyEntity;

    @JsonIgnore
    @OneToOne(cascade = CascadeType.ALL, mappedBy = "pidRegistryEntity", orphanRemoval = true, fetch = FetchType.LAZY, optional = false)
    private VideoCardEntity videoCardEntity;
     */

    public interface PidRegistryFetch {
        String ALL = "PidRegistryEntity.all";
    }
}
