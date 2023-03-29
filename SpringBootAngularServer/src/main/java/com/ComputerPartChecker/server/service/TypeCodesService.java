package com.ComputerPartChecker.server.service;

import com.ComputerPartChecker.server.entity.TypeCodesEntity;
import com.ComputerPartChecker.server.repository.TypeCodesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TypeCodesService extends BaseService<TypeCodesEntity, Integer, TypeCodesRepository> {
    @Autowired
    public TypeCodesService(TypeCodesRepository repository) {
        super(repository);
    }
}
