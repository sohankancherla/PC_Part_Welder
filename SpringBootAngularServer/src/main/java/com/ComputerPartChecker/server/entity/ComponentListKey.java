package com.ComputerPartChecker.server.entity;

import lombok.Data;

import java.io.Serializable;

@Data
public class ComponentListKey implements Serializable {
    private Integer cid;
    private Integer pid;
}
