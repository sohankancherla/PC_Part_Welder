package com.ComputerPartChecker.server.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
@Table(name = "manufacturercodes")
public class ManufacturerCodesEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "manufacturercodes_generator")
    @SequenceGenerator(name = "manufacturercodes_generator", sequenceName = "manufacturercodes_id_seq", allocationSize = 1)
    @Column(name = "id")
    private Integer id;

    @Column(name = "dictionary")
    private String dictionary;

    @JsonIgnore
    @OneToMany(mappedBy = "manufacturerCodesEntity")
    private List<PidRegistryEntity> pidRegistryEntities;
}
