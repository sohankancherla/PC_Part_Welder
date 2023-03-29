package com.ComputerPartChecker.server.service;

import com.ComputerPartChecker.server.entity.SocketCodesEntity;
import com.ComputerPartChecker.server.repository.SocketCodesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SocketCodesService extends BaseService<SocketCodesEntity, Integer, SocketCodesRepository> {
    @Autowired
    public SocketCodesService(SocketCodesRepository repository) {
        super(repository);
    }
}
