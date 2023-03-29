package com.ComputerPartChecker.server.service;

import com.ComputerPartChecker.server.entity.MotherboardFormFactorCodesEntity;
import com.ComputerPartChecker.server.repository.MotherboardFormFactorCodesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MotherboardFormFactorCodesService extends BaseService<MotherboardFormFactorCodesEntity, Integer, MotherboardFormFactorCodesRepository> {
    @Autowired
    public MotherboardFormFactorCodesService(MotherboardFormFactorCodesRepository repository) {
        super(repository);
    }
}
