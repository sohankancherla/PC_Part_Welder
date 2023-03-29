package com.ComputerPartChecker.server.service;

import com.ComputerPartChecker.server.entity.MicroarchitectureCodesEntity;
import com.ComputerPartChecker.server.repository.MicroarchitectureCodesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MicroarchitectureCodesService extends BaseService<MicroarchitectureCodesEntity, Integer, MicroarchitectureCodesRepository> {
    @Autowired
    public MicroarchitectureCodesService(MicroarchitectureCodesRepository repository) {
        super(repository);
    }
}
