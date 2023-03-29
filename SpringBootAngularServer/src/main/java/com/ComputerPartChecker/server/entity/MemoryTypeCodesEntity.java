package com.ComputerPartChecker.server.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
@Table(name = "memorytypecodes")
public class MemoryTypeCodesEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "memorytypecodes_generator")
    @SequenceGenerator(name = "memorytypecodes_generator", sequenceName = "memorytypecodes_id_seq", allocationSize = 1)
    @Column(name = "id")
    private Integer id;

    @Column(name = "dictionary")
    private String dictionary;

    @JsonIgnore
    @OneToMany(mappedBy = "memoryTypeCodesEntity")
    private List<MotherboardEntity> motherboardEntities;

    @JsonIgnore
    @OneToMany(mappedBy = "memoryTypeCodesEntity")
    private List<MemoryEntity> memoryEntities;

    @JsonIgnore
    @OneToMany(mappedBy = "memoryTypeCodesEntity")
    private List<VideoCardEntity> videoCardEntities;
}
