package com.ComputerPartChecker.server.service;

import com.ComputerPartChecker.server.entity.PowerSupplyEntity;
import com.ComputerPartChecker.server.repository.PowerSupplyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PowerSupplyService extends BaseService<PowerSupplyEntity, Integer, PowerSupplyRepository> {
    @Autowired
    public PowerSupplyService(PowerSupplyRepository repository) {
        super(repository);
    }
}
