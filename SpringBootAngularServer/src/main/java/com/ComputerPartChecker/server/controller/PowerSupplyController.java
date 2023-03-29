package com.ComputerPartChecker.server.controller;

import com.ComputerPartChecker.server.entity.PowerSupplyEntity;
import com.ComputerPartChecker.server.repository.PowerSupplyRepository;
import com.ComputerPartChecker.server.service.PowerSupplyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/powerSupply")
@RestController
public class PowerSupplyController extends BaseController<PowerSupplyEntity, Integer, PowerSupplyRepository, PowerSupplyService> {
    @Autowired
    public PowerSupplyController(PowerSupplyService baseService) {
        super(baseService);
    }
}
