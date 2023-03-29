package com.ComputerPartChecker.server.service;

import com.ComputerPartChecker.server.entity.ColorCodesEntity;
import com.ComputerPartChecker.server.repository.ColorCodesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ColorCodesService extends BaseService<ColorCodesEntity, Integer, ColorCodesRepository> {
    @Autowired
    public ColorCodesService(ColorCodesRepository repository) {
        super(repository);
    }
}
