package com.ComputerPartChecker.server.repository;

import com.ComputerPartChecker.server.entity.CpuCoolerEntity;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CpuCoolerRepository extends BaseRepository<CpuCoolerEntity, Integer> {
    @EntityGraph(value = CpuCoolerEntity.CpuCoolerFetch.ALL, type = EntityGraph.EntityGraphType.FETCH)
    List<CpuCoolerEntity> findAll();
}
