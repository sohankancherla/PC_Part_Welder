package com.ComputerPartChecker.server.repository;

import com.ComputerPartChecker.server.entity.MotherboardEntity;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MotherboardRepository extends BaseRepository<MotherboardEntity, Integer> {
    @EntityGraph(value = MotherboardEntity.MotherboardFetch.ALL, type = EntityGraph.EntityGraphType.FETCH)
    List<MotherboardEntity> findAll();
}
