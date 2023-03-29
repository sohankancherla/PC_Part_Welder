package com.ComputerPartChecker.server.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
@Table(name = "sidepanelwindowcodes")
public class SidePanelWindowCodesEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sidepanelwindowcodes_generator")
    @SequenceGenerator(name = "sidepanelwindowcodes_generator", sequenceName = "sidepanelwindowcodes_generator_id_seq", allocationSize = 1)
    @Column(name = "id")
    private Integer id;

    @Column(name = "dictionary")
    private String dictionary;

    @JsonIgnore
    @OneToMany(mappedBy = "sidePanelWindowCodesEntity")
    private List<CasesEntity> casesEntities;
}
