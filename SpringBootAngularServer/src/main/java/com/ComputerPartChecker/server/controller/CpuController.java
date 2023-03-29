package com.ComputerPartChecker.server.controller;

import com.ComputerPartChecker.server.entity.CpuEntity;
import com.ComputerPartChecker.server.repository.CpuRepository;
import com.ComputerPartChecker.server.service.CpuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/cpu")
@RestController
public class CpuController extends BaseController<CpuEntity, Integer, CpuRepository, CpuService> {
    @Autowired
    public CpuController(CpuService baseService) {
        super(baseService);
    }
}
