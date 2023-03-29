package com.ComputerPartChecker.server.repository;

import com.ComputerPartChecker.server.entity.CpuSocketCodesEntity;
import org.springframework.stereotype.Repository;

@Repository
public interface CpuSocketCodesRepository extends BaseRepository<CpuSocketCodesEntity, Integer> {
}
