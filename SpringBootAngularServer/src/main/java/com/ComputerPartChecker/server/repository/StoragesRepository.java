package com.ComputerPartChecker.server.repository;

import com.ComputerPartChecker.server.entity.StoragesEntity;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StoragesRepository extends BaseRepository<StoragesEntity, Integer> {
    @EntityGraph(value = StoragesEntity.StoragesFetch.ALL, type = EntityGraph.EntityGraphType.FETCH)
    List<StoragesEntity> findAll();
}
