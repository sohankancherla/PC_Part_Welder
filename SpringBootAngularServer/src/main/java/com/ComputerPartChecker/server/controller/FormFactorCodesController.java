package com.ComputerPartChecker.server.controller;

import com.ComputerPartChecker.server.entity.FormFactorCodesEntity;
import com.ComputerPartChecker.server.repository.FormFactorCodesRepository;
import com.ComputerPartChecker.server.service.FormFactorCodesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/formFactorCodes")
@RestController
public class FormFactorCodesController extends BaseController<FormFactorCodesEntity, Integer, FormFactorCodesRepository, FormFactorCodesService> {
    @Autowired
    public FormFactorCodesController(FormFactorCodesService baseService) {
        super(baseService);
    }
}
