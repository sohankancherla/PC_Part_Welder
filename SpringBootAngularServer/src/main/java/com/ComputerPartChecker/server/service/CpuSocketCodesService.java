package com.ComputerPartChecker.server.service;

import com.ComputerPartChecker.server.entity.CpuSocketCodesEntity;
import com.ComputerPartChecker.server.repository.CpuSocketCodesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CpuSocketCodesService extends BaseService<CpuSocketCodesEntity, Integer, CpuSocketCodesRepository> {
    @Autowired
    public CpuSocketCodesService(CpuSocketCodesRepository repository) {
        super(repository);
    }
}
