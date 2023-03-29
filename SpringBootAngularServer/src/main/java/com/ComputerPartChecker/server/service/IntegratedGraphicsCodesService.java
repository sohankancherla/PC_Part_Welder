package com.ComputerPartChecker.server.service;

import com.ComputerPartChecker.server.entity.IntegratedGraphicsCodesEntity;
import com.ComputerPartChecker.server.repository.IntegratedGraphicsCodesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class IntegratedGraphicsCodesService extends BaseService<IntegratedGraphicsCodesEntity, Integer, IntegratedGraphicsCodesRepository> {
    @Autowired
    public IntegratedGraphicsCodesService(IntegratedGraphicsCodesRepository repository) {
        super(repository);
    }
}
