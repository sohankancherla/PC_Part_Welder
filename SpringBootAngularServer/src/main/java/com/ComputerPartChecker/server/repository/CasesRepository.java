package com.ComputerPartChecker.server.repository;

import com.ComputerPartChecker.server.entity.CasesEntity;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CasesRepository extends BaseRepository<CasesEntity, Integer> {
    @EntityGraph(value = CasesEntity.CasesFetch.ALL, type = EntityGraph.EntityGraphType.FETCH)
    List<CasesEntity> findAll();
}
