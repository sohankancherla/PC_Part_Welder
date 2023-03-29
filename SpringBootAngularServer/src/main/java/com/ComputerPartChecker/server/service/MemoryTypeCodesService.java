package com.ComputerPartChecker.server.service;

import com.ComputerPartChecker.server.entity.MemoryTypeCodesEntity;
import com.ComputerPartChecker.server.repository.MemoryTypeCodesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MemoryTypeCodesService extends BaseService<MemoryTypeCodesEntity, Integer, MemoryTypeCodesRepository> {
    @Autowired
    public MemoryTypeCodesService(MemoryTypeCodesRepository repository) {
        super(repository);
    }
}
