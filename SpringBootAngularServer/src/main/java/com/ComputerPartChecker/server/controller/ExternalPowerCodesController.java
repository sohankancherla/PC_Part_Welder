package com.ComputerPartChecker.server.controller;

import com.ComputerPartChecker.server.entity.ExternalPowerCodesEntity;
import com.ComputerPartChecker.server.repository.ExternalPowerCodesRepository;
import com.ComputerPartChecker.server.service.ExternalPowerCodesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/externalPowerCodes")
@RestController
public class ExternalPowerCodesController extends BaseController<ExternalPowerCodesEntity, Integer, ExternalPowerCodesRepository, ExternalPowerCodesService> {
    @Autowired
    public ExternalPowerCodesController(ExternalPowerCodesService baseService) {
        super(baseService);
    }
}
