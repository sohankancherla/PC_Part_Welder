package com.ComputerPartChecker.server.controller;

import com.ComputerPartChecker.server.entity.ManufacturerCodesEntity;
import com.ComputerPartChecker.server.repository.ManufacturerCodesRepository;
import com.ComputerPartChecker.server.service.ManufacturerCodesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/manufacturerCodes")
@RestController
public class ManufacturerCodesController extends BaseController<ManufacturerCodesEntity, Integer, ManufacturerCodesRepository, ManufacturerCodesService> {
    @Autowired
    public ManufacturerCodesController(ManufacturerCodesService baseService) {
        super(baseService);
    }
}
