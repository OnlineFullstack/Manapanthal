package com.Manapanthal.ClientManagement.APIResponses;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.util.HashMap;
import java.util.Map;


public class PaginatedResponse<T> extends ContentResponse<T>{

    private Map<String,T> response = new HashMap<>();

    public PaginatedResponse(String status, String statusCode, String message, String key, T value) {
        super(status, statusCode, message, key, value);
        response.put(key, value);
    }

    private Pagination pagination;

    PaginatedResponse(String status, String statusCode, String message, String key, T value, Pagination pagination){
        super(status, statusCode, message, key, value);
        response.put(key, value);
        this.pagination = pagination;
    }

    @Getter
    @Setter
    public static class Pagination
    {
        public Pagination(Integer pageNumber, Integer pageSize, Integer totalPages, Long totalRecords)
        {
            this.pageNumber = pageNumber;
            this.pageSize = pageSize;
            this.totalPages = totalPages;
            this.totalRecords = totalRecords;
        }

        private Integer pageNumber;
        private Integer pageSize;
        private Integer totalPages;
        private Long totalRecords;
    }
}
