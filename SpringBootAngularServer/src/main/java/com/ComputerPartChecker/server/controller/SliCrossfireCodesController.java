package com.ComputerPartChecker.server.controller;

import com.ComputerPartChecker.server.entity.SliCrossfireCodesEntity;
import com.ComputerPartChecker.server.repository.SliCrossfireCodesRepository;
import com.ComputerPartChecker.server.service.SliCrossfireCodesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/sliCrossfireCodes")
@RestController
public class SliCrossfireCodesController extends BaseController<SliCrossfireCodesEntity, Integer, SliCrossfireCodesRepository, SliCrossfireCodesService> {
    @Autowired
    public SliCrossfireCodesController(SliCrossfireCodesService baseService) {
        super(baseService);
    }
}
