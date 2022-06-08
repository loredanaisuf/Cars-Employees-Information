package com.backend.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;
import java.util.Objects;


@Entity
@Table(name = "cars")
public class Car {
    @Id
    @GeneratedValue
    private Long id;
    private Long companyId;
    private String uniqueIdentificationNumber;
    private String registrationNumber;
    private String brand;
    private Long fabricationYear;
    private Date itpValidity;
    private Date rcaInsuranceValidity;
    private Date vignetteValidity;

    public Car(){}

    public Car(Long companyId, String uniqueIdentificationNumber, String registrationNumber, String brand, Long fabricationYear, Date itpValidity, Date rcaInsuranceValidity, Date vignetteValidity) {
        this.companyId = companyId;
        this.uniqueIdentificationNumber = uniqueIdentificationNumber;
        this.registrationNumber = registrationNumber;
        this.brand = brand;
        this.fabricationYear = fabricationYear;
        this.itpValidity = itpValidity;
        this.rcaInsuranceValidity = rcaInsuranceValidity;
        this.vignetteValidity = vignetteValidity;
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

    public String getUniqueIdentificationNumber() {
        return uniqueIdentificationNumber;
    }

    public void setUniqueIdentificationNumber(String uniqueIdentificationNumber) {
        this.uniqueIdentificationNumber = uniqueIdentificationNumber;
    }

    public String getRegistrationNumber() {
        return registrationNumber;
    }

    public void setRegistrationNumber(String registrationNumber) {
        this.registrationNumber = registrationNumber;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public Long getFabricationYear() {
        return fabricationYear;
    }

    public void setFabricationYear(Long fabricationYear) {
        this.fabricationYear = fabricationYear;
    }

    public Date getItpValidity() {
        return itpValidity;
    }

    public void setItpValidity(Date itpValidity) {
        this.itpValidity = itpValidity;
    }

    public Date getRcaInsuranceValidity() {
        return rcaInsuranceValidity;
    }

    public void setRcaInsuranceValidity(Date rcaInsuranceValidity) {
        this.rcaInsuranceValidity = rcaInsuranceValidity;
    }

    public Date getVignetteValidity() {
        return vignetteValidity;
    }

    public void setVignetteValidity(Date vignetteValidity) {
        this.vignetteValidity = vignetteValidity;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Car car = (Car) o;
        return Objects.equals(id, car.id) &&
                Objects.equals(companyId, car.companyId) &&
                Objects.equals(uniqueIdentificationNumber, car.uniqueIdentificationNumber) &&
                Objects.equals(registrationNumber, car.registrationNumber) &&
                Objects.equals(brand, car.brand) &&
                Objects.equals(fabricationYear, car.fabricationYear) &&
                Objects.equals(itpValidity, car.itpValidity) &&
                Objects.equals(rcaInsuranceValidity, car.rcaInsuranceValidity) &&
                Objects.equals(vignetteValidity, car.vignetteValidity);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, companyId, uniqueIdentificationNumber, registrationNumber, brand, fabricationYear, itpValidity, rcaInsuranceValidity, vignetteValidity);
    }

    @Override
    public String toString() {
        return "Car{" +
                "id=" + id +
                ", companyId=" + companyId +
                ", uniqueIdentificationNumber='" + uniqueIdentificationNumber + '\'' +
                ", registrationNumber='" + registrationNumber + '\'' +
                ", brand='" + brand + '\'' +
                ", fabricationYear=" + fabricationYear +
                ", itpValidity=" + itpValidity +
                ", rcaInsuranceValidity=" + rcaInsuranceValidity +
                ", vignetteValidity=" + vignetteValidity +
                '}';
    }
}
