package com.ComputerPartChecker.server.service;

import com.ComputerPartChecker.server.entity.EccRegisteredCodesEntity;
import com.ComputerPartChecker.server.repository.EccRegisteredCodesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EccRegisteredCodesService extends BaseService<EccRegisteredCodesEntity, Integer, EccRegisteredCodesRepository> {
    @Autowired
    public EccRegisteredCodesService(EccRegisteredCodesRepository repository) {
        super(repository);
    }
}
