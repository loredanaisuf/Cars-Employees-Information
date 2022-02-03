package com.backend.entity;

import java.util.Date;
import java.util.Objects;

public class EmployeeInformation {
    private long id;
    private String firstName;
    private String lastName;
    private String employmentDate;
    private String identityCardValidity;
    private String driverLicenseValidity;
    private String driverCardValidity;
    private String driverQualificationCardValidity;
    private String psychologicalOpinionValidity;
    private String medicalOpinionValidity;
    private String skillsSheetsValidity;

    public EmployeeInformation(long id, String firstName, String lastName, String employmentDate, String identityCardValidity, String driverLicenseValidity, String driverCardValidity, String driverQualificationCardValidity, String psychologicalOpinionValidity, String medicalOpinionValidity, String skillsSheetsValidity) {
        this.id = id;
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
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
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

    public String getEmploymentDate() {
        return employmentDate;
    }

    public void setEmploymentDate(String employmentDate) {
        this.employmentDate = employmentDate;
    }

    public String getIdentityCardValidity() {
        return identityCardValidity;
    }

    public void setIdentityCardValidity(String identityCardValidity) {
        this.identityCardValidity = identityCardValidity;
    }

    public String getDriverLicenseValidity() {
        return driverLicenseValidity;
    }

    public void setDriverLicenseValidity(String driverLicenseValidity) {
        this.driverLicenseValidity = driverLicenseValidity;
    }

    public String getDriverCardValidity() {
        return driverCardValidity;
    }

    public void setDriverCardValidity(String driverCardValidity) {
        this.driverCardValidity = driverCardValidity;
    }

    public String getDriverQualificationCardValidity() {
        return driverQualificationCardValidity;
    }

    public void setDriverQualificationCardValidity(String driverQualificationCardValidity) {
        this.driverQualificationCardValidity = driverQualificationCardValidity;
    }

    public String getPsychologicalOpinionValidity() {
        return psychologicalOpinionValidity;
    }

    public void setPsychologicalOpinionValidity(String psychologicalOpinionValidity) {
        this.psychologicalOpinionValidity = psychologicalOpinionValidity;
    }

    public String getMedicalOpinionValidity() {
        return medicalOpinionValidity;
    }

    public void setMedicalOpinionValidity(String medicalOpinionValidity) {
        this.medicalOpinionValidity = medicalOpinionValidity;
    }

    public String getSkillsSheetsValidity() {
        return skillsSheetsValidity;
    }

    public void setSkillsSheetsValidity(String skillsSheetsValidity) {
        this.skillsSheetsValidity = skillsSheetsValidity;
    }

    @Override
    public String toString() {
        return "EmployeeInformation{" +
                "id=" + id +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", employmentDate='" + employmentDate + '\'' +
                ", identityCardValidity='" + identityCardValidity + '\'' +
                ", driverLicenseValidity='" + driverLicenseValidity + '\'' +
                ", driverCardValidity='" + driverCardValidity + '\'' +
                ", driverQualificationCardValidity='" + driverQualificationCardValidity + '\'' +
                ", psychologicalOpinionValidity='" + psychologicalOpinionValidity + '\'' +
                ", medicalOpinionValidity='" + medicalOpinionValidity + '\'' +
                ", skillsSheetsValidity='" + skillsSheetsValidity + '\'' +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        EmployeeInformation that = (EmployeeInformation) o;
        return id == that.id &&
                Objects.equals(firstName, that.firstName) &&
                Objects.equals(lastName, that.lastName) &&
                Objects.equals(employmentDate, that.employmentDate) &&
                Objects.equals(identityCardValidity, that.identityCardValidity) &&
                Objects.equals(driverLicenseValidity, that.driverLicenseValidity) &&
                Objects.equals(driverCardValidity, that.driverCardValidity) &&
                Objects.equals(driverQualificationCardValidity, that.driverQualificationCardValidity) &&
                Objects.equals(psychologicalOpinionValidity, that.psychologicalOpinionValidity) &&
                Objects.equals(medicalOpinionValidity, that.medicalOpinionValidity) &&
                Objects.equals(skillsSheetsValidity, that.skillsSheetsValidity);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, firstName, lastName, employmentDate, identityCardValidity, driverLicenseValidity, driverCardValidity, driverQualificationCardValidity, psychologicalOpinionValidity, medicalOpinionValidity, skillsSheetsValidity);
    }
}
