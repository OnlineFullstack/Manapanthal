package com.Manapanthal.ClientManagement.Utilities;

import lombok.Data;

@Data
public class EndpointApi {
    public static final String CommonApi = "api/v1/";
    public static final String pathId = "/{id}";
    public static final String GetAllClients = "GetAllClients";
    public static final String saveClient = "saveClients";
    public static final String updateClient = "updateClients";
    public static final String deleteClient = "deleteClient"+pathId;
    public static final String getClientById = "GetClientById"+pathId;
    public static final String savePhotography = "savePhotography";
    public static final String getPhotographyList = "getPhotographyList";
    public static final String updatePhotography = "updatePhotography";
    public static final String deletePhotography = "deletePhotography"+pathId;
    public static final String getPhotographyById = "getPhotographyById"+pathId;
    public static final String savePackage = "savePackage";
    public static final String getPackageList = "getPackageList";
    public static final String saveWeddingHall = "saveWeddingHall";
    public static final String updateWeddingHall = "updateWeddingHall";
    public static final String getWeddingHall = "getWeddingHall";
    public static final String getWeddingHallById = "getWeddingHallById"+pathId;
    public static final String getWeddingHallList = "getWeddingHallList";
    public static final String deleteWeddingHallById = "deleteWeddingHallById"+pathId;
}
