package com.ComputerPartChecker.server.service;

import com.ComputerPartChecker.server.entity.PackagingCodesEntity;
import com.ComputerPartChecker.server.repository.PackagingCodesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PackagingCodesService extends BaseService<PackagingCodesEntity, Integer, PackagingCodesRepository> {
    @Autowired
    public PackagingCodesService(PackagingCodesRepository repository) {
        super(repository);
    }
}
