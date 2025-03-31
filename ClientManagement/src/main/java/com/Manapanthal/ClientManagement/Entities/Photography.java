package com.Manapanthal.ClientManagement.Entities;

import com.Manapanthal.ClientManagement.Utilities.DateTimeGenerate;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@Entity
public class Photography extends DateTimeGenerate {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String photographerName;
    private Long mobile;
    private String location;
    @ManyToMany
    @JoinTable(name = "packages",
            joinColumns = @JoinColumn(name = "photography_id"),
    inverseJoinColumns = @JoinColumn(name = "package_id"))
    private List<ServicePackages> servicePackagesList;
}
