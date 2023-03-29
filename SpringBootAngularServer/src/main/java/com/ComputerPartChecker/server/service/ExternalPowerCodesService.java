package com.ComputerPartChecker.server.service;

import com.ComputerPartChecker.server.entity.ExternalPowerCodesEntity;
import com.ComputerPartChecker.server.repository.ExternalPowerCodesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ExternalPowerCodesService extends BaseService<ExternalPowerCodesEntity, Integer, ExternalPowerCodesRepository> {
    @Autowired
    public ExternalPowerCodesService(ExternalPowerCodesRepository repository) {
        super(repository);
    }
}
