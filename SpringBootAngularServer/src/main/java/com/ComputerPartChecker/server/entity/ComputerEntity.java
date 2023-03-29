package com.ComputerPartChecker.server.entity;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "computer")
@IdClass(ComputerKey.class)
@NamedEntityGraphs({
        @NamedEntityGraph(
                name = ComputerEntity.ComputerFetch.ALL,
                includeAllAttributes = true
        )
})
public class ComputerEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "computer_generator")
    @SequenceGenerator(name = "computer_generator", sequenceName = "computer_computer_id_seq", allocationSize = 1)
    @Column(name = "computer_id")
    private Integer cid;

    @Id
    @Column(name = "uid")
    private Integer uid;

    @MapsId
    @OneToOne
    @JoinColumn(name = "uid", referencedColumnName = "uid", insertable = false, updatable = false)
    private UsersEntity usersEntity;

    public interface ComputerFetch {
        String ALL = "ComputerEntity.all";
    }
}
