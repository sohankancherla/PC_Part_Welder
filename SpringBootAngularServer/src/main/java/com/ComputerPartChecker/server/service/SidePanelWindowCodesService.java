package com.ComputerPartChecker.server.service;

import com.ComputerPartChecker.server.entity.SidePanelWindowCodesEntity;
import com.ComputerPartChecker.server.repository.SidePanelWindowCodesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SidePanelWindowCodesService extends BaseService<SidePanelWindowCodesEntity, Integer, SidePanelWindowCodesRepository> {
    @Autowired
    public SidePanelWindowCodesService(SidePanelWindowCodesRepository repository) {
        super(repository);
    }
}
