package com.ComputerPartChecker.server.service;

import com.ComputerPartChecker.server.entity.EfficiencyRatingCodesEntity;
import com.ComputerPartChecker.server.repository.EfficiencyRatingCodesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EfficiencyRatingCodesService extends BaseService<EfficiencyRatingCodesEntity, Integer, EfficiencyRatingCodesRepository> {
    @Autowired
    public EfficiencyRatingCodesService(EfficiencyRatingCodesRepository repository) {
        super(repository);
    }
}
