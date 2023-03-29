package com.ComputerPartChecker.server.controller;

import com.ComputerPartChecker.server.entity.SidePanelWindowCodesEntity;
import com.ComputerPartChecker.server.repository.SidePanelWindowCodesRepository;
import com.ComputerPartChecker.server.service.SidePanelWindowCodesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/sidePanelWindowCodes")
@RestController
public class SidePanelWindowCodesController extends BaseController<SidePanelWindowCodesEntity, Integer, SidePanelWindowCodesRepository, SidePanelWindowCodesService> {
    @Autowired
    public SidePanelWindowCodesController(SidePanelWindowCodesService baseService) {
        super(baseService);
    }
}
