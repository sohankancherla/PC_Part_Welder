package com.ComputerPartChecker.server.controller;

import com.ComputerPartChecker.server.entity.InterfaceCodesEntity;
import com.ComputerPartChecker.server.repository.InterfaceCodesRepository;
import com.ComputerPartChecker.server.service.InterfaceCodesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/interfaceCodes")
@RestController
public class InterfaceCodesController extends BaseController<InterfaceCodesEntity, Integer, InterfaceCodesRepository, InterfaceCodesService> {
    @Autowired
    public InterfaceCodesController(InterfaceCodesService baseService) {
        super(baseService);
    }
}
