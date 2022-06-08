package com.backend.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;
import java.util.Objects;

@Entity
@Table(name = "trucks")
public class Truck {
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
    private Date licenseValidity;
    private Date tachographValidity;

    public Truck(){}

    public Truck(Long companyId, String uniqueIdentificationNumber, String registrationNumber, String brand, Long fabricationYear, Date itpValidity, Date rcaInsuranceValidity, Date vignetteValidity, Date licenseValidity, Date tachographValidity) {
        this.companyId = companyId;
        this.uniqueIdentificationNumber = uniqueIdentificationNumber;
        this.registrationNumber = registrationNumber;
        this.brand = brand;
        this.fabricationYear = fabricationYear;
        this.itpValidity = itpValidity;
        this.rcaInsuranceValidity = rcaInsuranceValidity;
        this.vignetteValidity = vignetteValidity;
        this.licenseValidity = licenseValidity;
        this.tachographValidity = tachographValidity;
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

    public Date getLicenseValidity() {
        return licenseValidity;
    }

    public void setLicenseValidity(Date licenseValidity) {
        this.licenseValidity = licenseValidity;
    }

    public Date getTachographValidity() {
        return tachographValidity;
    }

    public void setTachographValidity(Date tachographValidity) {
        this.tachographValidity = tachographValidity;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Truck truck = (Truck) o;
        return Objects.equals(id, truck.id) &&
                Objects.equals(companyId, truck.companyId) &&
                Objects.equals(uniqueIdentificationNumber, truck.uniqueIdentificationNumber) &&
                Objects.equals(registrationNumber, truck.registrationNumber) &&
                Objects.equals(brand, truck.brand) &&
                Objects.equals(fabricationYear, truck.fabricationYear) &&
                Objects.equals(itpValidity, truck.itpValidity) &&
                Objects.equals(rcaInsuranceValidity, truck.rcaInsuranceValidity) &&
                Objects.equals(vignetteValidity, truck.vignetteValidity) &&
                Objects.equals(licenseValidity, truck.licenseValidity) &&
                Objects.equals(tachographValidity, truck.tachographValidity);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, companyId, uniqueIdentificationNumber, registrationNumber, brand, fabricationYear, itpValidity, rcaInsuranceValidity, vignetteValidity, licenseValidity, tachographValidity);
    }

    @Override
    public String toString() {
        return "Truck{" +
                "id=" + id +
                ", companyId=" + companyId +
                ", uniqueIdentificationNumber='" + uniqueIdentificationNumber + '\'' +
                ", registrationNumber='" + registrationNumber + '\'' +
                ", brand='" + brand + '\'' +
                ", fabricationYear=" + fabricationYear +
                ", itpValidity=" + itpValidity +
                ", rcaInsuranceValidity=" + rcaInsuranceValidity +
                ", vignetteValidity=" + vignetteValidity +
                ", licenseValidity=" + licenseValidity +
                ", tachographValidity=" + tachographValidity +
                '}';
    }
}
