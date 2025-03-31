package com.Manapanthal.ClientManagement.Entities;

import com.Manapanthal.ClientManagement.Utilities.DateTimeGenerate;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

import java.util.Currency;

@Getter
@Setter
@Entity
public class ServicePackages extends DateTimeGenerate {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String packageName;
    private Double packageAmount;
    private String description;

}
