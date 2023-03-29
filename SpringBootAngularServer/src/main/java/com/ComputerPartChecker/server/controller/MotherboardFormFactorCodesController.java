package com.ComputerPartChecker.server.controller;

import com.ComputerPartChecker.server.entity.MotherboardFormFactorCodesEntity;
import com.ComputerPartChecker.server.repository.MotherboardFormFactorCodesRepository;
import com.ComputerPartChecker.server.service.MotherboardFormFactorCodesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/motherboardFormFactorCodes")
@RestController
public class MotherboardFormFactorCodesController extends BaseController<MotherboardFormFactorCodesEntity, Integer, MotherboardFormFactorCodesRepository, MotherboardFormFactorCodesService> {
    @Autowired
    public MotherboardFormFactorCodesController(MotherboardFormFactorCodesService baseService) {
        super(baseService);
    }
}
