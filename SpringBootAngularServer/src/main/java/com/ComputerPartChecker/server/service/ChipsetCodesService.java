package com.ComputerPartChecker.server.service;

import com.ComputerPartChecker.server.entity.ChipsetCodesEntity;
import com.ComputerPartChecker.server.repository.ChipsetCodesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ChipsetCodesService extends BaseService<ChipsetCodesEntity, Integer, ChipsetCodesRepository> {
    @Autowired
    public ChipsetCodesService(ChipsetCodesRepository repository) {
        super(repository);
    }
}
