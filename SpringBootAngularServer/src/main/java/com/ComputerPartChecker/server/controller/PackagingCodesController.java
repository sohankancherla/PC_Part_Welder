package com.ComputerPartChecker.server.controller;

import com.ComputerPartChecker.server.entity.PackagingCodesEntity;
import com.ComputerPartChecker.server.repository.PackagingCodesRepository;
import com.ComputerPartChecker.server.service.PackagingCodesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/packagingCodes")
@RestController
public class PackagingCodesController extends BaseController<PackagingCodesEntity, Integer, PackagingCodesRepository, PackagingCodesService> {
    @Autowired
    public PackagingCodesController(PackagingCodesService baseService) {
        super(baseService);
    }
}
