package com.Manapanthal.ClientManagement.Entities.ClientData;

import com.Manapanthal.ClientManagement.Utilities.DateTimeGenerate;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

import java.sql.Timestamp;

@Data
@Entity
public class Astrology extends DateTimeGenerate {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String rasi;
    private String natchathiram;
    private Timestamp dob_dot;
    private String birth_location;
}
