package com.Manapanthal.ClientManagement.APIResponses;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.util.HashMap;
import java.util.Map;

@Getter
@Setter
public class ContentResponse<T> extends BaseResponse{
    private Map<String,T> response = new HashMap<>();

    public ContentResponse(String status, String statusCode, String message, String key, T value) {
        super(status, statusCode, message);
        response.put(key,value);
    }
}
