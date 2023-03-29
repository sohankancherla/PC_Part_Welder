package com.ComputerPartChecker.server.service;

import com.ComputerPartChecker.server.entity.CpuCoolerEntity;
import com.ComputerPartChecker.server.repository.CpuCoolerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CpuCoolerService extends BaseService<CpuCoolerEntity, Integer, CpuCoolerRepository> {
    @Autowired
    public CpuCoolerService(CpuCoolerRepository repository) {
        super(repository);
    }
}
