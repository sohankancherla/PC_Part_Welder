package com.ComputerPartChecker.server.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
@Table(name = "microarchitecturecodes")
public class MicroarchitectureCodesEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "microarchitecturecodes_generator")
    @SequenceGenerator(name = "microarchitecturecodes_generator", sequenceName = "microarchitecturecodes_id_seq", allocationSize = 1)
    @Column(name = "id")
    private Integer id;

    @Column(name = "dictionary")
    private String dictionary;

    @JsonIgnore
    @OneToMany(mappedBy = "microarchitectureCodesEntity")
    private List<CpuEntity> cpuEntities;
}
