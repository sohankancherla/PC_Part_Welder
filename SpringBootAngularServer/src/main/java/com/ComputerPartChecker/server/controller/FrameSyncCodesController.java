package com.ComputerPartChecker.server.controller;

import com.ComputerPartChecker.server.entity.FrameSyncCodesEntity;
import com.ComputerPartChecker.server.repository.FrameSyncCodesRepository;
import com.ComputerPartChecker.server.service.FrameSyncCodesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/frameSyncCodes")
@RestController
public class FrameSyncCodesController extends BaseController<FrameSyncCodesEntity, Integer, FrameSyncCodesRepository, FrameSyncCodesService> {
    @Autowired
    public FrameSyncCodesController(FrameSyncCodesService baseService) {
        super(baseService);
    }
}
