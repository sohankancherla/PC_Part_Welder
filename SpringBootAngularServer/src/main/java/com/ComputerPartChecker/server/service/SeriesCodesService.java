package com.ComputerPartChecker.server.service;

import com.ComputerPartChecker.server.entity.SeriesCodesEntity;
import com.ComputerPartChecker.server.repository.SeriesCodesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SeriesCodesService extends BaseService<SeriesCodesEntity, Integer, SeriesCodesRepository> {
    @Autowired
    public SeriesCodesService(SeriesCodesRepository repository) {
        super(repository);
    }
}
