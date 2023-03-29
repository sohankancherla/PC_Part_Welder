package com.ComputerPartChecker.server.repository;

import com.ComputerPartChecker.server.entity.ComponentListEntity;
import com.ComputerPartChecker.server.entity.ComponentListKey;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ComponentListRepository extends BaseRepository<ComponentListEntity, ComponentListKey> {
    @EntityGraph(value = ComponentListEntity.ComponentListFetch.ALL, type = EntityGraph.EntityGraphType.FETCH)
    List<ComponentListEntity> findAll();

    @EntityGraph(value = ComponentListEntity.ComponentListFetch.ALL, type = EntityGraph.EntityGraphType.FETCH)
    List<ComponentListEntity> findByCid(Integer cid);
}
