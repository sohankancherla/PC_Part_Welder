package com.ComputerPartChecker.server.entity;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "frontpanelusbcodes")
public class FrontPanelUsbCodesEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "frontpanelusbcodes_generator")
    @SequenceGenerator(name = "frontpanelusbcodes_generator", sequenceName = "frontpanelusbcodes_id_seq", allocationSize = 1)
    @Column(name = "id")
    private Integer id;

    @Column(name = "dictionary")
    private String dictionary;
}
