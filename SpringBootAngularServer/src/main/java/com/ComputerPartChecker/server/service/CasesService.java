package com.ComputerPartChecker.server.service;

import com.ComputerPartChecker.server.entity.CasesEntity;
import com.ComputerPartChecker.server.repository.CasesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CasesService extends BaseService<CasesEntity, Integer, CasesRepository> {
    @Autowired
    public CasesService(CasesRepository repository) {
        super(repository);
    }
}
