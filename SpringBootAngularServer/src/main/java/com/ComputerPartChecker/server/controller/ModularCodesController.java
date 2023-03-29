package com.ComputerPartChecker.server.controller;

import com.ComputerPartChecker.server.entity.ModularCodesEntity;
import com.ComputerPartChecker.server.repository.ModularCodesRepository;
import com.ComputerPartChecker.server.service.ModularCodesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/modularCodes")
@RestController
public class ModularCodesController extends BaseController<ModularCodesEntity, Integer, ModularCodesRepository, ModularCodesService> {
    @Autowired
    public ModularCodesController(ModularCodesService baseService) {
        super(baseService);
    }
}
