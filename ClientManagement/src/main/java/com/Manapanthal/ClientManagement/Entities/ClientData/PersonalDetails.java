package com.Manapanthal.ClientManagement.Entities.ClientData;

import com.Manapanthal.ClientManagement.Utilities.DateTimeGenerate;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class PersonalDetails extends DateTimeGenerate {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String full_name;
    private String mother_name;
    private String first_name;
    private String last_name;
    private Long age;
    private String gender;
    private String marital_status;
    private Double height;
    private Integer num_of_siblings;
    private String religion;
    private String caste;
    private String language;
    private String bio;

}
