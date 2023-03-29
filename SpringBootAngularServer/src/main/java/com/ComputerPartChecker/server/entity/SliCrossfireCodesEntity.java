package com.ComputerPartChecker.server.entity;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "slicrossfirecodes")
public class SliCrossfireCodesEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "slicrossfirecodes_generator")
    @SequenceGenerator(name = "slicrossfirecodes_generator", sequenceName = "slicrossfirecodes_id_seq", allocationSize = 1)
    @Column(name = "id")
    private Integer id;

    @Column(name = "dictionary")
    private String dictionary;
}
