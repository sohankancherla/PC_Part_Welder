package com.ComputerPartChecker.server.controller;

import com.ComputerPartChecker.server.entity.SeriesCodesEntity;
import com.ComputerPartChecker.server.repository.SeriesCodesRepository;
import com.ComputerPartChecker.server.service.SeriesCodesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/seriesCodes")
@RestController
public class SeriesCodesController extends BaseController<SeriesCodesEntity, Integer, SeriesCodesRepository, SeriesCodesService> {
    @Autowired
    public SeriesCodesController(SeriesCodesService baseService) {
        super(baseService);
    }
}
