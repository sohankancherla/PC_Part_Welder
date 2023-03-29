package com.ComputerPartChecker.server.service;

import com.ComputerPartChecker.server.entity.AvailabilityCodesEntity;
import com.ComputerPartChecker.server.repository.AvailabilityCodesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AvailabilityCodesService extends BaseService<AvailabilityCodesEntity, Integer, AvailabilityCodesRepository> {
    @Autowired
    public AvailabilityCodesService(AvailabilityCodesRepository repository) {
        super(repository);
    }
}
