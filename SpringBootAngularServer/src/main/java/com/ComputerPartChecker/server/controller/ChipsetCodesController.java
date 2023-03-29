package com.ComputerPartChecker.server.controller;

import com.ComputerPartChecker.server.entity.ChipsetCodesEntity;
import com.ComputerPartChecker.server.repository.ChipsetCodesRepository;
import com.ComputerPartChecker.server.service.ChipsetCodesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/chipsetCodes")
@RestController
public class ChipsetCodesController extends BaseController<ChipsetCodesEntity, Integer, ChipsetCodesRepository, ChipsetCodesService> {
    @Autowired
    public ChipsetCodesController(ChipsetCodesService baseService) {
        super(baseService);
    }
}
