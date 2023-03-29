package com.ComputerPartChecker.server.controller;

import com.ComputerPartChecker.server.entity.BearingCodesEntity;
import com.ComputerPartChecker.server.repository.BearingCodesRepository;
import com.ComputerPartChecker.server.service.BearingCodesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/bearingCodes")
@RestController
public class BearingCodesController extends BaseController<BearingCodesEntity, Integer, BearingCodesRepository, BearingCodesService> {
    @Autowired
    public BearingCodesController(BearingCodesService baseService) {
        super(baseService);
    }
}
