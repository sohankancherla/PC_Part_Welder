package com.ComputerPartChecker.server.repository;

import com.ComputerPartChecker.server.entity.ColorCodesEntity;
import org.springframework.stereotype.Repository;

@Repository
public interface ColorCodesRepository extends BaseRepository<ColorCodesEntity, Integer> {
}
