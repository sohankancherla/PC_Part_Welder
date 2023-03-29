package com.ComputerPartChecker.server.entity;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "cpusocketcodes")
public class CpuSocketCodesEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "cpusocketcodes_generator")
    @SequenceGenerator(name = "cpusocketcodes_generator", sequenceName = "cpusocketcodes_id_seq", allocationSize = 1)
    @Column(name = "id")
    private Integer id;

    @Column(name = "dictionary")
    private String dictionary;
}
