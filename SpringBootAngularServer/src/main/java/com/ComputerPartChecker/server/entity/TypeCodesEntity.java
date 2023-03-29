package com.ComputerPartChecker.server.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
@Table(name = "typecodes")
public class TypeCodesEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "typecodes_generator")
    @SequenceGenerator(name = "typecodes_generator", sequenceName = "typecodes_id_seq", allocationSize = 1)
    @Column(name = "id")
    private Integer id;

    @Column(name = "dictionary")
    private String dictionary;

    @JsonIgnore
    @OneToMany(mappedBy = "typeCodesEntity")
    private List<CasesEntity> casesEntities;

    @JsonIgnore
    @OneToMany(mappedBy = "typeCodesEntity")
    private List<PowerSupplyEntity> powerSupplyEntities;
}
