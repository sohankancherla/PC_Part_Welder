package com.ComputerPartChecker.server.service;

import com.ComputerPartChecker.server.entity.FrameSyncCodesEntity;
import com.ComputerPartChecker.server.repository.FrameSyncCodesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FrameSyncCodesService extends BaseService<FrameSyncCodesEntity, Integer, FrameSyncCodesRepository> {
    @Autowired
    public FrameSyncCodesService(FrameSyncCodesRepository repository) {
        super(repository);
    }
}
