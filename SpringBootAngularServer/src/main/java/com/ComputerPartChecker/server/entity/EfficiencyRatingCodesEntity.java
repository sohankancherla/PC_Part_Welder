package com.ComputerPartChecker.server.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
@Table(name = "efficiencyratingcodes")
public class EfficiencyRatingCodesEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "efficiencyratingcodes_generator")
    @SequenceGenerator(name = "efficiencyratingcodes_generator", sequenceName = "efficiencyratingcodes_id_seq", allocationSize = 1)
    @Column(name = "id")
    private Integer id;

    @Column(name = "dictionary")
    private String dictionary;

    @JsonIgnore
    @OneToMany(mappedBy = "efficiencyRatingCodesEntity")
    private List<PowerSupplyEntity> powerSupplyEntities;
}
