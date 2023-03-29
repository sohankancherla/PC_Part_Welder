package com.ComputerPartChecker.server.controller;

import com.ComputerPartChecker.server.entity.CpuSocketCodesEntity;
import com.ComputerPartChecker.server.repository.CpuSocketCodesRepository;
import com.ComputerPartChecker.server.service.CpuSocketCodesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/cpuSocketCodes")
@RestController
public class CpuSocketCodesController extends BaseController<CpuSocketCodesEntity, Integer, CpuSocketCodesRepository, CpuSocketCodesService> {
    @Autowired
    public CpuSocketCodesController(CpuSocketCodesService baseService) {
        super(baseService);
    }
}
