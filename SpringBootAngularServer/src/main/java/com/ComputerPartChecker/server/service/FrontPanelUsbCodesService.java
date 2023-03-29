package com.ComputerPartChecker.server.service;

import com.ComputerPartChecker.server.entity.FrontPanelUsbCodesEntity;
import com.ComputerPartChecker.server.repository.FrontPanelUsbCodesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FrontPanelUsbCodesService extends BaseService<FrontPanelUsbCodesEntity, Integer, FrontPanelUsbCodesRepository> {
    @Autowired
    public FrontPanelUsbCodesService(FrontPanelUsbCodesRepository repository) {
        super(repository);
    }
}
