package com.ComputerPartChecker.server.repository;

import com.ComputerPartChecker.server.entity.MicroarchitectureCodesEntity;
import org.springframework.stereotype.Repository;

@Repository
public interface MicroarchitectureCodesRepository extends BaseRepository<MicroarchitectureCodesEntity, Integer> {
}
