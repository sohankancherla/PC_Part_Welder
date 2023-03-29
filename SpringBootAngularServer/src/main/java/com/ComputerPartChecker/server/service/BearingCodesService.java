package com.ComputerPartChecker.server.service;

import com.ComputerPartChecker.server.entity.BearingCodesEntity;
import com.ComputerPartChecker.server.repository.BearingCodesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BearingCodesService extends BaseService<BearingCodesEntity, Integer, BearingCodesRepository> {
    @Autowired
    public BearingCodesService(BearingCodesRepository repository) {
        super(repository);
    }
}
