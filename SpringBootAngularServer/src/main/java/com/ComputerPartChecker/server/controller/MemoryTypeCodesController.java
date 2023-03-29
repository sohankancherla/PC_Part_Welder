package com.ComputerPartChecker.server.controller;

import com.ComputerPartChecker.server.entity.MemoryTypeCodesEntity;
import com.ComputerPartChecker.server.repository.MemoryTypeCodesRepository;
import com.ComputerPartChecker.server.service.MemoryTypeCodesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/memoryTypeCodes")
@RestController
public class MemoryTypeCodesController extends BaseController<MemoryTypeCodesEntity, Integer, MemoryTypeCodesRepository, MemoryTypeCodesService> {
    @Autowired
    public MemoryTypeCodesController(MemoryTypeCodesService baseService) {
        super(baseService);
    }
}
