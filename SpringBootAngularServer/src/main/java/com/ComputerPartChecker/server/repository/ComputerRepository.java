package com.ComputerPartChecker.server.repository;

import com.ComputerPartChecker.server.entity.ComputerEntity;
import com.ComputerPartChecker.server.entity.ComputerKey;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ComputerRepository extends BaseRepository<ComputerEntity, ComputerKey> {
    @EntityGraph(value = ComputerEntity.ComputerFetch.ALL, type = EntityGraph.EntityGraphType.FETCH)
    List<ComputerEntity> findAll();

    @EntityGraph(value = ComputerEntity.ComputerFetch.ALL, type = EntityGraph.EntityGraphType.FETCH)
    List<ComputerEntity> findByUid(Integer uid);
}
