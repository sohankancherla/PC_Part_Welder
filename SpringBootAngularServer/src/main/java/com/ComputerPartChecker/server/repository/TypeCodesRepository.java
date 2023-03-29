package com.ComputerPartChecker.server.repository;

import com.ComputerPartChecker.server.entity.TypeCodesEntity;
import org.springframework.stereotype.Repository;

@Repository
public interface TypeCodesRepository extends BaseRepository<TypeCodesEntity, Integer> {
}
