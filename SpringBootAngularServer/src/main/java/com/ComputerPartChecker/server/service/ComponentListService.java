package com.ComputerPartChecker.server.service;

import com.ComputerPartChecker.server.entity.ComponentListEntity;
import com.ComputerPartChecker.server.entity.ComponentListKey;
import com.ComputerPartChecker.server.repository.ComponentListRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ComponentListService extends BaseService<ComponentListEntity, ComponentListKey, ComponentListRepository> {
    @Autowired
    public ComponentListService(ComponentListRepository repository) {
        super(repository);
    }

    public List<ComponentListEntity> findByCid(Integer cid) {
        return repository.findByCid(cid);
    }
}
