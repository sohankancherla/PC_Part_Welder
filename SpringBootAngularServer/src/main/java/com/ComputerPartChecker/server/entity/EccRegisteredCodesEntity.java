package com.ComputerPartChecker.server.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
@Table(name = "eccregisteredcodes")
public class EccRegisteredCodesEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "eccregisteredcodes_generator")
    @SequenceGenerator(name = "eccregisteredcodes_generator", sequenceName = "eccregisteredcodes_id_seq", allocationSize = 1)
    @Column(name = "id")
    private Integer id;

    @Column(name = "dictionary")
    private String dictionary;

    @JsonIgnore
    @OneToMany(mappedBy = "eccRegisteredCodesEntity")
    private List<MemoryEntity> memoryEntities;
}
