package com.Manapanthal.ClientManagement.Entities.ClientData;


import com.Manapanthal.ClientManagement.Utilities.DateTimeGenerate;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class ClientData extends DateTimeGenerate {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @OneToOne
    @JoinColumn(name = "personalDetails_id")
    private PersonalDetails personalDetails;
    @OneToOne
    @JoinColumn(name = "contactInfo_id",nullable = false)
    private ContactInfo contactInfo;
    @OneToOne
    @JoinColumn(name = "profileImages_id")
    private ProfileImages profileImages;
    @OneToOne
    @JoinColumn(name = "careerStudies_id")
    private CareerStudies careerStudies;
    @OneToOne
    @JoinColumn(name = "lifestyle_id")
    private Lifestyle lifestyle;
    @OneToOne
    @JoinColumn(name = "userInfo_id")
    private UserInfo userInfo;
    @OneToOne
    @JoinColumn(name = "astrology_id")
    private Astrology astrology;
    @OneToOne
    @JoinColumn(name = "matchings_id")
    private Matchings matchings;
    private Long tokens;

}
