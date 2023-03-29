package com.ComputerPartChecker.server.service;

import com.ComputerPartChecker.server.entity.MotherboardEntity;
import com.ComputerPartChecker.server.repository.MotherboardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MotherboardService extends BaseService<MotherboardEntity, Integer, MotherboardRepository> {
    @Autowired
    public MotherboardService(MotherboardRepository repository) {
        super(repository);
    }
}
