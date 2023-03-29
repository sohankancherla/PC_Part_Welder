package com.ComputerPartChecker.server.repository;

import com.ComputerPartChecker.server.entity.CpuEntity;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CpuRepository extends BaseRepository<CpuEntity, Integer> {
    @EntityGraph(value = CpuEntity.CpuFetch.ALL, type = EntityGraph.EntityGraphType.FETCH)
    List<CpuEntity> findAll();
}
