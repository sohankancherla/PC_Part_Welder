package com.ComputerPartChecker.server.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
@Table(name = "bearingcodes")
public class BearingCodesEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "bearingcodes_generator")
    @SequenceGenerator(name = "bearingcodes_generator", sequenceName = "bearingcodes_id_seq", allocationSize = 1)
    @Column(name = "id")
    private Integer id;

    @Column(name = "dictionary")
    private String dictionary;

    @JsonIgnore
    @OneToMany(mappedBy = "bearingCodesEntity")
    private List<CpuCoolerEntity> cpuCoolerEntities;
}
