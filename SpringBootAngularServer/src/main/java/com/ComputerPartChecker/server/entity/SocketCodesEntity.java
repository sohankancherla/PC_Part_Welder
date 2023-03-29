package com.ComputerPartChecker.server.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
@Table(name = "socketcodes")
public class SocketCodesEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "socketcodes_generator")
    @SequenceGenerator(name = "socketcodes_generator", sequenceName = "socketcodes_id_seq", allocationSize = 1)
    @Column(name = "id")
    private Integer id;

    @Column(name = "dictionary")
    private String dictionary;

    @JsonIgnore
    @OneToMany(mappedBy = "socketCodesEntity")
    private List<MotherboardEntity> motherboardEntities;

    @JsonIgnore
    @OneToMany(mappedBy = "socketCodesEntity")
    private List<CpuEntity> cpuEntities;
}
