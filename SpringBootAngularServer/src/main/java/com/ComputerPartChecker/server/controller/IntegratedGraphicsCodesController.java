package com.ComputerPartChecker.server.controller;

import com.ComputerPartChecker.server.entity.IntegratedGraphicsCodesEntity;
import com.ComputerPartChecker.server.repository.IntegratedGraphicsCodesRepository;
import com.ComputerPartChecker.server.service.IntegratedGraphicsCodesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/integratedGraphicsCodes")
@RestController
public class IntegratedGraphicsCodesController extends BaseController<IntegratedGraphicsCodesEntity, Integer, IntegratedGraphicsCodesRepository, IntegratedGraphicsCodesService> {
    @Autowired
    public IntegratedGraphicsCodesController(IntegratedGraphicsCodesService baseService) {
        super(baseService);
    }
}
