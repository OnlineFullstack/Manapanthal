package com.Manapanthal.ClientManagement.DTO.Requests.ClientDataRequests;

import lombok.Data;

import java.util.List;

@Data
public class ProfileImagesRequest{

    private Long id;
    private String profile_pic_url;
    private List<String> gallery_image_urls;
}
