package com.ComputerPartChecker.server.controller;

import com.ComputerPartChecker.server.entity.EfficiencyRatingCodesEntity;
import com.ComputerPartChecker.server.repository.EfficiencyRatingCodesRepository;
import com.ComputerPartChecker.server.service.EfficiencyRatingCodesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/efficiencyRatingCodes")
@RestController
public class EfficiencyRatingCodesController extends BaseController<EfficiencyRatingCodesEntity, Integer, EfficiencyRatingCodesRepository, EfficiencyRatingCodesService> {
    @Autowired
    public EfficiencyRatingCodesController(EfficiencyRatingCodesService baseService) {
        super(baseService);
    }
}
