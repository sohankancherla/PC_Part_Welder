package com.ComputerPartChecker.server.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
@Table(name = "chipsetcodes")
public class ChipsetCodesEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "chipsetcodes_generator")
    @SequenceGenerator(name = "chipsetcodes_generator", sequenceName = "chipsetcodes_id_seq", allocationSize = 1)
    @Column(name = "id")
    private Integer id;

    @Column(name = "dictionary")
    private String dictionary;

    @JsonIgnore
    @OneToMany(mappedBy = "chipsetCodesEntity")
    private List<MotherboardEntity> motherboardEntities;

    @JsonIgnore
    @OneToMany(mappedBy = "chipsetCodesEntity")
    private List<VideoCardEntity> videoCardEntities;
}
