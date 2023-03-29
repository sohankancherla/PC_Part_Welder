package com.ComputerPartChecker.server.service;

import com.ComputerPartChecker.server.entity.CoreFamilyCodesEntity;
import com.ComputerPartChecker.server.repository.CoreFamilyCodesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CoreFamilyCodesService extends BaseService<CoreFamilyCodesEntity, Integer, CoreFamilyCodesRepository> {
    @Autowired
    public CoreFamilyCodesService(CoreFamilyCodesRepository repository) {
        super(repository);
    }
}
