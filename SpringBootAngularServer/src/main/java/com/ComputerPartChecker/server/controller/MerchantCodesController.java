package com.ComputerPartChecker.server.controller;

import com.ComputerPartChecker.server.entity.MerchantCodesEntity;
import com.ComputerPartChecker.server.repository.MerchantCodesRepository;
import com.ComputerPartChecker.server.service.MerchantCodesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/merchantCodes")
@RestController
public class MerchantCodesController extends BaseController<MerchantCodesEntity, Integer, MerchantCodesRepository, MerchantCodesService> {
    @Autowired
    public MerchantCodesController(MerchantCodesService baseService) {
        super(baseService);
    }
}
