package com.ComputerPartChecker.server.repository;

import com.ComputerPartChecker.server.entity.ModularCodesEntity;
import org.springframework.stereotype.Repository;

@Repository
public interface ModularCodesRepository extends BaseRepository<ModularCodesEntity, Integer> {
}
