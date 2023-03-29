package com.ComputerPartChecker.server.service;

import com.ComputerPartChecker.server.entity.MerchantCodesEntity;
import com.ComputerPartChecker.server.repository.MerchantCodesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MerchantCodesService extends BaseService<MerchantCodesEntity, Integer, MerchantCodesRepository> {
    @Autowired
    public MerchantCodesService(MerchantCodesRepository repository) {
        super(repository);
    }
}
