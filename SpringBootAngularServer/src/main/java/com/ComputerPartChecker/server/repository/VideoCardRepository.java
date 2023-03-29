package com.ComputerPartChecker.server.repository;

import com.ComputerPartChecker.server.entity.VideoCardEntity;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface VideoCardRepository extends BaseRepository<VideoCardEntity, Integer> {
    @EntityGraph(value = VideoCardEntity.VideoCardFetch.ALL, type = EntityGraph.EntityGraphType.FETCH)
    List<VideoCardEntity> findAll();
}
