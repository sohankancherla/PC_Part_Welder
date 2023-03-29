package com.ComputerPartChecker.server.controller;

import com.ComputerPartChecker.server.entity.CoreFamilyCodesEntity;
import com.ComputerPartChecker.server.repository.CoreFamilyCodesRepository;
import com.ComputerPartChecker.server.service.CoreFamilyCodesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/coreFamilyCodes")
@RestController
public class CoreFamilyCodesController extends BaseController<CoreFamilyCodesEntity, Integer, CoreFamilyCodesRepository, CoreFamilyCodesService> {
    @Autowired
    public CoreFamilyCodesController(CoreFamilyCodesService baseService) {
        super(baseService);
    }
}
