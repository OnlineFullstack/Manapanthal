package com.Manapanthal.ClientManagement.Services;

import java.util.Map;

public interface PackageService {
    void savePackage(Map<String, Object> packageRequest);

    Object getPackageList();
}
