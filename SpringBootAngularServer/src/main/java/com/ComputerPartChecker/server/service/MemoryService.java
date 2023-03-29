package com.ComputerPartChecker.server.service;

import com.ComputerPartChecker.server.entity.MemoryEntity;
import com.ComputerPartChecker.server.repository.MemoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MemoryService extends BaseService<MemoryEntity, Integer, MemoryRepository> {
    @Autowired
    public MemoryService(MemoryRepository repository) {
        super(repository);
    }
}
