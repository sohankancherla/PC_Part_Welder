package com.ComputerPartChecker.server.service;

import com.ComputerPartChecker.server.entity.FormFactorCodesEntity;
import com.ComputerPartChecker.server.repository.FormFactorCodesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FormFactorCodesService extends BaseService<FormFactorCodesEntity, Integer, FormFactorCodesRepository> {
    @Autowired
    public FormFactorCodesService(FormFactorCodesRepository repository) {
        super(repository);
    }
}
