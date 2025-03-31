package com.Manapanthal.ClientManagement.Enums;

import lombok.Getter;

@Getter
public enum ResponseStatus {

    SUCCESS("Success"), REJECTED("Rejected"), FAILURE("Failure"), UNKNOWN("Unknown"),
    ERROR("Error"), WARNING("Warning");

    private String status;

    ResponseStatus(String status){
        this.status = status;
    }
    public static ResponseStatus getByStatus(String status)
    {

        for (ResponseStatus requestStatus : values())
        {
            if (requestStatus.getStatus().equals(status))
            {
                return requestStatus;
            }
        }

        throw new AssertionError("Request status not found for given status [status: " + status + "]");
    }
}
