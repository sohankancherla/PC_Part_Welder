package com.ComputerPartChecker.server.service;

import com.ComputerPartChecker.server.entity.UsersEntity;
import com.ComputerPartChecker.server.repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UsersService extends BaseService<UsersEntity, Integer, UsersRepository> {
    @Autowired
    public UsersService(UsersRepository repository) {
        super(repository);
    }
}
