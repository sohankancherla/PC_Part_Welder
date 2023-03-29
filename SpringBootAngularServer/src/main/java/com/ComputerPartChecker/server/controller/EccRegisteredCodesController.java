package com.ComputerPartChecker.server.controller;

import com.ComputerPartChecker.server.entity.EccRegisteredCodesEntity;
import com.ComputerPartChecker.server.repository.EccRegisteredCodesRepository;
import com.ComputerPartChecker.server.service.EccRegisteredCodesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/eccRegisteredCodes")
@RestController
public class EccRegisteredCodesController extends BaseController<EccRegisteredCodesEntity, Integer, EccRegisteredCodesRepository, EccRegisteredCodesService> {
    @Autowired
    public EccRegisteredCodesController(EccRegisteredCodesService baseService) {
        super(baseService);
    }
}
