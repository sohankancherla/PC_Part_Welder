package com.ComputerPartChecker.server.entity;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "externalpowercodes")
public class ExternalPowerCodesEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "externalpowercodes_generator")
    @SequenceGenerator(name = "externalpowercodes_generator", sequenceName = "externalpowercodes_id_seq", allocationSize = 1)
    @Column(name = "id")
    private Integer id;

    @Column(name = "dictionary")
    private String dictionary;
}
