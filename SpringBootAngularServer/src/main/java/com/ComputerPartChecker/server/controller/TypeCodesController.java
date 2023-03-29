package com.ComputerPartChecker.server.controller;

import com.ComputerPartChecker.server.entity.TypeCodesEntity;
import com.ComputerPartChecker.server.repository.TypeCodesRepository;
import com.ComputerPartChecker.server.service.TypeCodesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/typeCodes")
@RestController
public class TypeCodesController extends BaseController<TypeCodesEntity, Integer, TypeCodesRepository, TypeCodesService> {
    @Autowired
    public TypeCodesController(TypeCodesService baseService) {
        super(baseService);
    }
}
