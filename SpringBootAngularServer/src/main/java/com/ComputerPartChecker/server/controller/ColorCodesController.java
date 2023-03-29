package com.ComputerPartChecker.server.controller;

import com.ComputerPartChecker.server.entity.ColorCodesEntity;
import com.ComputerPartChecker.server.repository.ColorCodesRepository;
import com.ComputerPartChecker.server.service.ColorCodesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/colorCodes")
@RestController
public class ColorCodesController extends BaseController<ColorCodesEntity, Integer, ColorCodesRepository, ColorCodesService> {
    @Autowired
    public ColorCodesController(ColorCodesService baseService) {
        super(baseService);
    }
}
