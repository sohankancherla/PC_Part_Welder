package com.ComputerPartChecker.server.controller;

import com.ComputerPartChecker.server.entity.StoragesEntity;
import com.ComputerPartChecker.server.repository.StoragesRepository;
import com.ComputerPartChecker.server.service.StoragesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/storages")
@RestController
public class StoragesController extends BaseController<StoragesEntity, Integer, StoragesRepository, StoragesService> {
    @Autowired
    public StoragesController(StoragesService baseService) {
        super(baseService);
    }
}
