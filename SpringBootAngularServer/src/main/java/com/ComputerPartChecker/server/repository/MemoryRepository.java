package com.ComputerPartChecker.server.repository;

import com.ComputerPartChecker.server.entity.MemoryEntity;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MemoryRepository extends BaseRepository<MemoryEntity, Integer> {
    @EntityGraph(value = MemoryEntity.MemoryFetch.ALL, type = EntityGraph.EntityGraphType.FETCH)
    List<MemoryEntity> findAll();
}
