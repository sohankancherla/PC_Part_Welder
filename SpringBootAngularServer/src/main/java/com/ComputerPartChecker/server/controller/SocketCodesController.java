package com.ComputerPartChecker.server.controller;

import com.ComputerPartChecker.server.entity.SocketCodesEntity;
import com.ComputerPartChecker.server.repository.SocketCodesRepository;
import com.ComputerPartChecker.server.service.SocketCodesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/socketCodes")
@RestController
public class SocketCodesController extends BaseController<SocketCodesEntity, Integer, SocketCodesRepository, SocketCodesService> {
    @Autowired
    public SocketCodesController(SocketCodesService baseService) {
        super(baseService);
    }
}
