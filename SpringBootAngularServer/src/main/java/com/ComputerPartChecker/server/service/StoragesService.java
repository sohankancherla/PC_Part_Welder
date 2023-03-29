package com.ComputerPartChecker.server.service;

import com.ComputerPartChecker.server.entity.StoragesEntity;
import com.ComputerPartChecker.server.repository.StoragesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StoragesService extends BaseService<StoragesEntity, Integer, StoragesRepository> {
    @Autowired
    public StoragesService(StoragesRepository repository) {
        super(repository);
    }
}
