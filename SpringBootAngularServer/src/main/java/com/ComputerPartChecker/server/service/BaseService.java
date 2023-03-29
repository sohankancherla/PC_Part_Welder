package com.ComputerPartChecker.server.service;

import com.ComputerPartChecker.server.repository.BaseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public abstract class BaseService<E, K, R extends BaseRepository<E, K>> {
    protected R repository;

    @Autowired
    public BaseService(R repository) {
        this.repository = repository;
    }

    @Autowired
    public final void setRepository(R repository) {
        this.repository = repository;
    }

    public List<E> findAll() {
        return repository.findAll();
    }

    public E add(E entity) {
        return repository.save(entity);
    }

    public void delete(E entity) {
        repository.delete(entity);
    }

    public E edit(E entity) {
        E persistanceEntity = repository.save(entity);
        repository.refresh(persistanceEntity);
        return persistanceEntity;
    }
}
