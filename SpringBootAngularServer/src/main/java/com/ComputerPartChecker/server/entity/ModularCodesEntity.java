package com.ComputerPartChecker.server.entity;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "modularcodes")
public class ModularCodesEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "modularcodes_generator")
    @SequenceGenerator(name = "modularcodes_generator", sequenceName = "modularcodes_id_seq", allocationSize = 1)
    @Column(name = "id")
    private Integer id;

    @Column(name = "dictionary")
    private String dictionary;
}
