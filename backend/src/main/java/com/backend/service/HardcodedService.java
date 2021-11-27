package com.backend.service;

import com.backend.entity.EmployeeInformation;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class HardcodedService {
    private static List<EmployeeInformation> employeeInformations = new ArrayList<>();
    private static long idCounter = 0;

    static {
        employeeInformations.add(new EmployeeInformation(++idCounter, "Adi", "Popescu", "26.05.2029","26.05.2029", "26.05.2029","26.05.2029", "26.05.2029","26.05.2022","26.05.2022","26.05.2022"));
        employeeInformations.add(new EmployeeInformation(++idCounter, "Adi", "Ionescu", "26.05.2029","26.05.2029", "26.05.2029","26.05.2029", "26.05.2029","26.05.2022","26.05.2022","26.05.2022"));
        employeeInformations.add(new EmployeeInformation(++idCounter, "Ionut", "Popescu", "26.05.2029","26.05.2029", "26.05.2029","26.05.2029", "26.05.2029","26.05.2022","26.05.2022","26.05.2022"));

    }

    public List<EmployeeInformation> findAll() {
        return employeeInformations;
    }

    public EmployeeInformation save(EmployeeInformation employeeInformation) {
        if(employeeInformation.getId()==-1 || employeeInformation.getId()==0) {
            employeeInformation.setId(++idCounter);
            employeeInformations.add(employeeInformation);
        } else {
            deleteById(employeeInformation.getId());
            employeeInformations.add(employeeInformation);
        }
        return employeeInformation;
    }

    public EmployeeInformation deleteById(long id) {
        EmployeeInformation employeeInformation = findById(id);

        if (employeeInformation == null)
            return null;

        if (employeeInformations.remove(employeeInformation)) {
            return employeeInformation;
        }

        return null;
    }

    public EmployeeInformation findById(long id) {
        for (EmployeeInformation employeeInformation : employeeInformations) {
            if (employeeInformation.getId() == id) {
                return employeeInformation;
            }
        }

        return null;
    }
}
