package com.Manapanthal.ClientManagement.DTO.Requests;

import lombok.Data;

@Data
public class UserInfoRequest{

    private Long id;
    private String user_type;
    private String status;
    private String userName;
    private String password;
}
