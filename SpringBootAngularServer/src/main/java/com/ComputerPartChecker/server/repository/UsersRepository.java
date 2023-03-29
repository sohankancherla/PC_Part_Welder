package com.ComputerPartChecker.server.repository;

import com.ComputerPartChecker.server.entity.UsersEntity;
import org.springframework.stereotype.Repository;

@Repository
public interface UsersRepository extends BaseRepository<UsersEntity, Integer> {
}
