package com.ComputerPartChecker.server.controller;

import com.ComputerPartChecker.server.entity.ComponentListEntity;
import com.ComputerPartChecker.server.entity.ComponentListKey;
import com.ComputerPartChecker.server.repository.ComponentListRepository;
import com.ComputerPartChecker.server.service.ComponentListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/componentList")
@RestController
public class ComponentListController extends BaseController<ComponentListEntity, ComponentListKey, ComponentListRepository, ComponentListService> {
    @Autowired
    public ComponentListController(ComponentListService baseService) {
        super(baseService);
    }

    @GetMapping("/findByCid/{cid}")
    public List<ComponentListEntity> findByCid(@PathVariable(value="cid") Integer cid) {
        return baseService.findByCid(cid);
    }
}
