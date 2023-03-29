package com.ComputerPartChecker.server.controller;

import com.ComputerPartChecker.server.entity.MicroarchitectureCodesEntity;
import com.ComputerPartChecker.server.repository.MicroarchitectureCodesRepository;
import com.ComputerPartChecker.server.service.MicroarchitectureCodesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/microarchitectureCodes")
@RestController
public class MicroarchitectureCodesController extends BaseController<MicroarchitectureCodesEntity, Integer, MicroarchitectureCodesRepository, MicroarchitectureCodesService> {
    @Autowired
    public MicroarchitectureCodesController(MicroarchitectureCodesService baseService) {
        super(baseService);
    }
}
