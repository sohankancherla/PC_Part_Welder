package com.ComputerPartChecker.server.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
@Table(name = "framesynccodes")
public class FrameSyncCodesEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "framesynccodes_generator")
    @SequenceGenerator(name = "framesynccodes_generator", sequenceName = "framesynccodes_id_seq", allocationSize = 1)
    @Column(name = "id")
    private Integer id;

    @Column(name = "dictionary")
    private String dictionary;

    @JsonIgnore
    @OneToMany(mappedBy = "frameSyncCodesEntity")
    private List<VideoCardEntity> videoCardEntities;
}
