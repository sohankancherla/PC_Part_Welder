package com.ComputerPartChecker.server.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
@Table(name = "corefamilycodes")
public class CoreFamilyCodesEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "corefamilycodes_generator")
    @SequenceGenerator(name = "corefamilycodes_generator", sequenceName = "corefamilycodes_id_seq", allocationSize = 1)
    @Column(name = "id")
    private Integer id;

    @Column(name = "dictionary")
    private String dictionary;

    @JsonIgnore
    @OneToMany(mappedBy = "coreFamilyCodesEntity")
    private List<CpuEntity> cpuEntities;
}
