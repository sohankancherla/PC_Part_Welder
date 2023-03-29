package com.ComputerPartChecker.server.repository;

import com.ComputerPartChecker.server.entity.PowerSupplyEntity;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PowerSupplyRepository extends BaseRepository<PowerSupplyEntity, Integer> {
    @EntityGraph(value = PowerSupplyEntity.PowerSupplyFetch.ALL, type = EntityGraph.EntityGraphType.FETCH)
    List<PowerSupplyEntity> findAll();
}
