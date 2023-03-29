package com.ComputerPartChecker.server.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
@Table(name = "integratedgraphicscodes")
public class IntegratedGraphicsCodesEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "integratedgraphicscodes_generator")
    @SequenceGenerator(name = "integratedgraphicscodes_generator", sequenceName = "integratedgraphicscodes_id_seq", allocationSize = 1)
    @Column(name = "id")
    private Integer id;

    @Column(name = "dictionary")
    private String dictionary;

    @JsonIgnore
    @OneToMany(mappedBy = "integratedGraphicsCodesEntity")
    private List<CpuEntity> cpuEntities;
}
