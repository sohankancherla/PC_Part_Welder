package com.ComputerPartChecker.server.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
@Table(name = "motherboardformfactorcodes")
public class MotherboardFormFactorCodesEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "motherboardformfactorcodes_generator")
    @SequenceGenerator(name = "motherboardformfactorcodes_generator", sequenceName = "motherboardformfactorcodes_id_seq", allocationSize = 1)
    @Column(name = "id")
    private Integer id;

    @Column(name = "dictionary")
    private String dictionary;

    @JsonIgnore
    @OneToMany(mappedBy = "motherboardFormFactorCodesEntity")
    private List<MotherboardEntity> motherboardEntities;
}
