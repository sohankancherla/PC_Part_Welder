package com.ComputerPartChecker.server.entity;

import lombok.Data;

import java.io.Serializable;

@Data
public class PricingKey implements Serializable {
    private Integer pid;
    private Integer merchant;
}
