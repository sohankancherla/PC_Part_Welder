package com.ComputerPartChecker.server.service;

import com.ComputerPartChecker.server.entity.ComputerEntity;
import com.ComputerPartChecker.server.entity.ComputerKey;
import com.ComputerPartChecker.server.repository.ComputerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ComputerService extends BaseService<ComputerEntity, ComputerKey, ComputerRepository> {
    @Autowired
    public ComputerService(ComputerRepository repository) {
        super(repository);
    }

    public List<ComputerEntity> findByUid(Integer uid) {
        return repository.findByUid(uid);
    }
}
