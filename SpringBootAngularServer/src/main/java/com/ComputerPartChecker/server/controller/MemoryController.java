package com.ComputerPartChecker.server.controller;

import com.ComputerPartChecker.server.entity.MemoryEntity;
import com.ComputerPartChecker.server.repository.MemoryRepository;
import com.ComputerPartChecker.server.service.MemoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/memory")
@RestController
public class MemoryController extends BaseController<MemoryEntity, Integer, MemoryRepository, MemoryService> {
    @Autowired
    public MemoryController(MemoryService baseService) {
        super(baseService);
    }
}
