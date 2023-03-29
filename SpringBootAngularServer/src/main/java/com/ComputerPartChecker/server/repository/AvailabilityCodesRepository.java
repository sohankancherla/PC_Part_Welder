package com.ComputerPartChecker.server.repository;

import com.ComputerPartChecker.server.entity.AvailabilityCodesEntity;
import org.springframework.stereotype.Repository;

@Repository
public interface AvailabilityCodesRepository extends BaseRepository<AvailabilityCodesEntity, Integer> {
}
