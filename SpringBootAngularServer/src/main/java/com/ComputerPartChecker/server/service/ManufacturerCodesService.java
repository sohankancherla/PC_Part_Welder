package com.ComputerPartChecker.server.service;

import com.ComputerPartChecker.server.entity.ManufacturerCodesEntity;
import com.ComputerPartChecker.server.repository.ManufacturerCodesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ManufacturerCodesService extends BaseService<ManufacturerCodesEntity, Integer, ManufacturerCodesRepository> {
    @Autowired
    public ManufacturerCodesService(ManufacturerCodesRepository repository) {
        super(repository);
    }
}
