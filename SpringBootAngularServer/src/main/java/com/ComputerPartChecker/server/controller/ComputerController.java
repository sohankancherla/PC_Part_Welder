package com.ComputerPartChecker.server.controller;

import com.ComputerPartChecker.server.entity.ComputerEntity;
import com.ComputerPartChecker.server.entity.ComputerKey;
import com.ComputerPartChecker.server.repository.ComputerRepository;
import com.ComputerPartChecker.server.service.ComputerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/computer")
@RestController
public class ComputerController extends BaseController<ComputerEntity, ComputerKey, ComputerRepository, ComputerService> {
    @Autowired
    public ComputerController(ComputerService baseService) {
        super(baseService);
    }

    @GetMapping("/findByUid/{uid}")
    public List<ComputerEntity> findByUid(@PathVariable(value="uid") Integer uid) {
        return baseService.findByUid(uid);
    }
}
