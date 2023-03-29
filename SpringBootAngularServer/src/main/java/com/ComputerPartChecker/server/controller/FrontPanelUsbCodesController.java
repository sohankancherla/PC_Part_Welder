package com.ComputerPartChecker.server.controller;

import com.ComputerPartChecker.server.entity.FrontPanelUsbCodesEntity;
import com.ComputerPartChecker.server.repository.FrontPanelUsbCodesRepository;
import com.ComputerPartChecker.server.service.FrontPanelUsbCodesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/frontPanelUsbCodes")
@RestController
public class FrontPanelUsbCodesController extends BaseController<FrontPanelUsbCodesEntity, Integer, FrontPanelUsbCodesRepository, FrontPanelUsbCodesService> {
    @Autowired
    public FrontPanelUsbCodesController(FrontPanelUsbCodesService baseService) {
        super(baseService);
    }
}
