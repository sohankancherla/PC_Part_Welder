package com.ComputerPartChecker.server.controller;

import com.ComputerPartChecker.server.repository.BaseRepository;
import com.ComputerPartChecker.server.service.BaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

public abstract class BaseController<E, K, R extends BaseRepository<E, K>, S extends BaseService<E, K, R>> {
    protected final S baseService;

    @Autowired
    public BaseController(S baseService) {
        this.baseService = baseService;
    }

    @GetMapping("/findAll")
    public List<E> findAll() {
        return baseService.findAll();
    }

    @PostMapping("/add")
    public E add(@RequestBody E entity) {
        return baseService.add(entity);
    }

    @PostMapping("/delete")
    public E delete(@RequestBody E entity) {
        baseService.delete(entity);
        return entity;
    }

    @PostMapping("/edit")
    public E edit(@RequestBody E entity) {
        return baseService.edit(entity);
    }
}
