package com.ComputerPartChecker.server.service;

import com.ComputerPartChecker.server.entity.SliCrossfireCodesEntity;
import com.ComputerPartChecker.server.repository.SliCrossfireCodesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SliCrossfireCodesService extends BaseService<SliCrossfireCodesEntity, Integer, SliCrossfireCodesRepository> {
    @Autowired
    public SliCrossfireCodesService(SliCrossfireCodesRepository repository) {
        super(repository);
    }
}
