package com.ComputerPartChecker.server.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
@Table(name = "formfactorcodes")
public class FormFactorCodesEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "formfactorcodes_generator")
    @SequenceGenerator(name = "formfactorcodes_generator", sequenceName = "formfactorcodes_id_seq", allocationSize = 1)
    @Column(name = "id")
    private Integer id;

    @Column(name = "dictionary")
    private String dictionary;

    @JsonIgnore
    @OneToMany(mappedBy = "formFactorCodesEntity")
    private List<MemoryEntity> memoryEntities;

    @JsonIgnore
    @OneToMany(mappedBy = "formFactorCodesEntity")
    private List<PowerSupplyEntity> powerSupplyEntities;
}
