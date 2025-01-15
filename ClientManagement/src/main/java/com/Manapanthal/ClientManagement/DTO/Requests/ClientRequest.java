package com.Manapanthal.ClientManagement.DTO.Requests;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ClientRequest{

    private Long id;
    private PersonalDetailsRequest personalDetails;
    private ContactInfoRequest contactInfo;
    private ProfileImagesRequest profileImages;
    private CareerStudiesRequest careerStudies;
    private LifestyleRequest lifestyle;
    private UserInfoRequest userInfo;
    private AstrologyRequest astrology;
    private MatchingsRequest matchings;
    private Long tokens;

}
