package com.Manapanthal.ClientManagement.Entities.ClientData;

import com.Manapanthal.ClientManagement.Utilities.DateTimeGenerate;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

import java.util.List;

@Data
@Entity
public class Matchings extends DateTimeGenerate {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private List<String> interest_sent;
}

