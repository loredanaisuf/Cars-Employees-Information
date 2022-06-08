package com.backend.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;
import java.util.Objects;

@Entity
@Table(name = "employees")
public class Employee {
    @Id
    @GeneratedValue
    private Long id;
    private Long companyId;
    private String firstName;
    private String lastName;
    private Date employmentDate;
    private Date identityCardValidity;
    private Date driverLicenseValidity;
    private Date driverCardValidity;
    private Date driverQualificationCardValidity;
    private Date psychologicalOpinionValidity;
    private Date medicalOpinionValidity;
    private Date skillsSheetsValidity;
    private String username;
    private String password;

    public Employee(){}

    public Employee(Long companyId, String firstName, String lastName, Date employmentDate, Date identityCardValidity, Date driverLicenseValidity, Date driverCardValidity, Date driverQualificationCardValidity, Date psychologicalOpinionValidity, Date medicalOpinionValidity, Date skillsSheetsValidity, String username, String password) {
        this.companyId = companyId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.employmentDate = employmentDate;
        this.identityCardValidity = identityCardValidity;
        this.driverLicenseValidity = driverLicenseValidity;
        this.driverCardValidity = driverCardValidity;
        this.driverQualificationCardValidity = driverQualificationCardValidity;
        this.psychologicalOpinionValidity = psychologicalOpinionValidity;
        this.medicalOpinionValidity = medicalOpinionValidity;
        this.skillsSheetsValidity = skillsSheetsValidity;
        this.username = username;
        this.password = password;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getCompanyId() {
        return companyId;
    }

    public void setCompanyId(Long companyId) {
        this.companyId = companyId;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public Date getEmploymentDate() {
        return employmentDate;
    }

    public void setEmploymentDate(Date employmentDate) {
        this.employmentDate = employmentDate;
    }

    public Date getIdentityCardValidity() {
        return identityCardValidity;
    }

    public void setIdentityCardValidity(Date identityCardValidity) {
        this.identityCardValidity = identityCardValidity;
    }

    public Date getDriverLicenseValidity() {
        return driverLicenseValidity;
    }

    public void setDriverLicenseValidity(Date driverLicenseValidity) {
        this.driverLicenseValidity = driverLicenseValidity;
    }

    public Date getDriverCardValidity() {
        return driverCardValidity;
    }

    public void setDriverCardValidity(Date driverCardValidity) {
        this.driverCardValidity = driverCardValidity;
    }

    public Date getDriverQualificationCardValidity() {
        return driverQualificationCardValidity;
    }

    public void setDriverQualificationCardValidity(Date driverQualificationCardValidity) {
        this.driverQualificationCardValidity = driverQualificationCardValidity;
    }

    public Date getPsychologicalOpinionValidity() {
        return psychologicalOpinionValidity;
    }

    public void setPsychologicalOpinionValidity(Date psychologicalOpinionValidity) {
        this.psychologicalOpinionValidity = psychologicalOpinionValidity;
    }

    public Date getMedicalOpinionValidity() {
        return medicalOpinionValidity;
    }

    public void setMedicalOpinionValidity(Date medicalOpinionValidity) {
        this.medicalOpinionValidity = medicalOpinionValidity;
    }

    public Date getSkillsSheetsValidity() {
        return skillsSheetsValidity;
    }

    public void setSkillsSheetsValidity(Date skillsSheetsValidity) {
        this.skillsSheetsValidity = skillsSheetsValidity;
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
        Employee employee = (Employee) o;
        return Objects.equals(id, employee.id) &&
                Objects.equals(companyId, employee.companyId) &&
                Objects.equals(firstName, employee.firstName) &&
                Objects.equals(lastName, employee.lastName) &&
                Objects.equals(employmentDate, employee.employmentDate) &&
                Objects.equals(identityCardValidity, employee.identityCardValidity) &&
                Objects.equals(driverLicenseValidity, employee.driverLicenseValidity) &&
                Objects.equals(driverCardValidity, employee.driverCardValidity) &&
                Objects.equals(driverQualificationCardValidity, employee.driverQualificationCardValidity) &&
                Objects.equals(psychologicalOpinionValidity, employee.psychologicalOpinionValidity) &&
                Objects.equals(medicalOpinionValidity, employee.medicalOpinionValidity) &&
                Objects.equals(skillsSheetsValidity, employee.skillsSheetsValidity) &&
                Objects.equals(username, employee.username) &&
                Objects.equals(password, employee.password);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, companyId, firstName, lastName, employmentDate, identityCardValidity, driverLicenseValidity, driverCardValidity, driverQualificationCardValidity, psychologicalOpinionValidity, medicalOpinionValidity, skillsSheetsValidity, username, password);
    }

    @Override
    public String toString() {
        return "Employee{" +
                "id=" + id +
                ", companyId=" + companyId +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", employmentDate=" + employmentDate +
                ", identityCardValidity=" + identityCardValidity +
                ", driverLicenseValidity=" + driverLicenseValidity +
                ", driverCardValidity=" + driverCardValidity +
                ", driverQualificationCardValidity=" + driverQualificationCardValidity +
                ", psychologicalOpinionValidity=" + psychologicalOpinionValidity +
                ", medicalOpinionValidity=" + medicalOpinionValidity +
                ", skillsSheetsValidity=" + skillsSheetsValidity +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}
