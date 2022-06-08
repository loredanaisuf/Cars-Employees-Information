package com.backend.entity;

import javax.persistence.*;
import java.util.Objects;
import java.util.Set;

@Entity
@Table(name = "companies")
public class Company {
    @Id
    @GeneratedValue
    private Long id;

    private String companyName;
    private String managerName;
    private String registrationCode;
    private String username;
    private String password;

    public Company(){}

    public Company(String companyName, String managerName, String registrationCode, String username, String password) {
        this.companyName = companyName;
        this.managerName = managerName;
        this.registrationCode = registrationCode;
        this.username = username;
        this.password = password;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public String getManagerName() {
        return managerName;
    }

    public void setManagerName(String managerName) {
        this.managerName = managerName;
    }

    public String getRegistrationCode() {
        return registrationCode;
    }

    public void setRegistrationCode(String registrationCode) {
        this.registrationCode = registrationCode;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Company company = (Company) o;
        return Objects.equals(id, company.id) &&
                Objects.equals(companyName, company.companyName) &&
                Objects.equals(managerName, company.managerName) &&
                Objects.equals(registrationCode, company.registrationCode) &&
                Objects.equals(username, company.username) &&
                Objects.equals(password, company.password);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, companyName, managerName, registrationCode, username, password);
    }
}
