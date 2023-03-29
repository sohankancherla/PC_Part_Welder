package com.ComputerPartChecker.server.controller;

import com.ComputerPartChecker.server.entity.MotherboardEntity;
import com.ComputerPartChecker.server.repository.MotherboardRepository;
import com.ComputerPartChecker.server.service.MotherboardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/motherboard")
@RestController
public class MotherboardController extends BaseController<MotherboardEntity, Integer, MotherboardRepository, MotherboardService> {
    @Autowired
    public MotherboardController(MotherboardService baseService) {
        super(baseService);
    }
}
