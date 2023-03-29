package com.ComputerPartChecker.server.controller;

import com.ComputerPartChecker.server.entity.AvailabilityCodesEntity;
import com.ComputerPartChecker.server.repository.AvailabilityCodesRepository;
import com.ComputerPartChecker.server.service.AvailabilityCodesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/availabilityCodes")
@RestController
public class AvailabilityCodesController extends BaseController<AvailabilityCodesEntity, Integer, AvailabilityCodesRepository, AvailabilityCodesService> {
    @Autowired
    public AvailabilityCodesController(AvailabilityCodesService baseService) {
        super(baseService);
    }
}
