package com.ComputerPartChecker.server.service;

import com.ComputerPartChecker.server.entity.InterfaceCodesEntity;
import com.ComputerPartChecker.server.repository.InterfaceCodesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class InterfaceCodesService extends BaseService<InterfaceCodesEntity, Integer, InterfaceCodesRepository> {
    @Autowired
    public InterfaceCodesService(InterfaceCodesRepository repository) {
        super(repository);
    }
}
