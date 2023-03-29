package com.ComputerPartChecker.server.service;

import com.ComputerPartChecker.server.entity.ModularCodesEntity;
import com.ComputerPartChecker.server.repository.ModularCodesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ModularCodesService extends BaseService<ModularCodesEntity, Integer, ModularCodesRepository> {
    @Autowired
    public ModularCodesService(ModularCodesRepository repository) {
        super(repository);
    }
}
