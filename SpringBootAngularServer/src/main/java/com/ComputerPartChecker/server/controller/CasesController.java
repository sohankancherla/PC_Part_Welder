package com.ComputerPartChecker.server.controller;

import com.ComputerPartChecker.server.entity.CasesEntity;
import com.ComputerPartChecker.server.repository.CasesRepository;
import com.ComputerPartChecker.server.service.CasesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/cases")
@RestController
public class CasesController extends BaseController<CasesEntity, Integer, CasesRepository, CasesService> {
    @Autowired
    public CasesController(CasesService baseService) {
        super(baseService);
    }
}
