package com.ComputerPartChecker.server.controller;

import com.ComputerPartChecker.server.entity.CpuCoolerEntity;
import com.ComputerPartChecker.server.repository.CpuCoolerRepository;
import com.ComputerPartChecker.server.service.CpuCoolerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/cpuCooler")
@RestController
public class CpuCoolerController extends BaseController<CpuCoolerEntity, Integer, CpuCoolerRepository, CpuCoolerService> {
    @Autowired
    public CpuCoolerController(CpuCoolerService baseService) {
        super(baseService);
    }
}
