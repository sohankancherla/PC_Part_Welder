package com.ComputerPartChecker.server.controller;

import com.ComputerPartChecker.server.entity.UsersEntity;
import com.ComputerPartChecker.server.repository.UsersRepository;
import com.ComputerPartChecker.server.service.UsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/users")
@RestController
public class UsersController extends BaseController<UsersEntity, Integer, UsersRepository, UsersService> {
    @Autowired
    public UsersController(UsersService baseService) {
        super(baseService);
    }
}
