package com.ComputerPartChecker.server.repository;

import com.ComputerPartChecker.server.entity.PackagingCodesEntity;
import org.springframework.stereotype.Repository;

@Repository
public interface PackagingCodesRepository extends BaseRepository<PackagingCodesEntity, Integer> {
}
