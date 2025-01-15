package com.Manapanthal.ClientManagement.Entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class Photography {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
}
