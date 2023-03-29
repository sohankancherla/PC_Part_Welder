package com.ComputerPartChecker.server.service;

import com.ComputerPartChecker.server.entity.CpuEntity;
import com.ComputerPartChecker.server.repository.CpuRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CpuService extends BaseService<CpuEntity, Integer, CpuRepository> {
    @Autowired
    public CpuService(CpuRepository repository) {
        super(repository);
    }
}
