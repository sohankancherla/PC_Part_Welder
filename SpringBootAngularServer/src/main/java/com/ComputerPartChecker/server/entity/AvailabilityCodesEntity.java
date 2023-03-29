package com.ComputerPartChecker.server.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
@Table(name = "availabilitycodes")
public class AvailabilityCodesEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "availabilitycodes_generator")
    @SequenceGenerator(name = "availabilitycodes_generator", sequenceName = "availabilitycodes_id_seq", allocationSize = 1)
    @Column(name = "id")
    private Integer id;

    @Column(name = "dictionary")
    private String dictionary;

    @JsonIgnore
    @OneToMany(mappedBy = "availabilityCodesEntity")
    private List<PricingEntity> pricingEntities;
}
