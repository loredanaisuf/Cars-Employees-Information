package com.backend.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;
import java.util.Objects;

@Entity
@Table(name = "trails")
public class Trail {
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
    private Date cmrInsuranceValidity;

    public Trail(){}

    public Trail(Long companyId, String uniqueIdentificationNumber, String registrationNumber, String brand, Long fabricationYear, Date itpValidity, Date rcaInsuranceValidity, Date cmrInsuranceValidity) {
        this.companyId = companyId;
        this.uniqueIdentificationNumber = uniqueIdentificationNumber;
        this.registrationNumber = registrationNumber;
        this.brand = brand;
        this.fabricationYear = fabricationYear;
        this.itpValidity = itpValidity;
        this.rcaInsuranceValidity = rcaInsuranceValidity;
        this.cmrInsuranceValidity = cmrInsuranceValidity;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getCompanyId(){return companyId;}

    public void setCompanyId(Long companyId){this.companyId = companyId;}

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

    public Date getCmrInsuranceValidity() {
        return cmrInsuranceValidity;
    }

    public void setCmrInsuranceValidity(Date CMRInsuranceValidity) {
        this.cmrInsuranceValidity = CMRInsuranceValidity;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Trail trail = (Trail) o;
        return Objects.equals(id, trail.id) &&
                Objects.equals(companyId, trail.companyId) &&
                Objects.equals(uniqueIdentificationNumber, trail.uniqueIdentificationNumber) &&
                Objects.equals(registrationNumber, trail.registrationNumber) &&
                Objects.equals(brand, trail.brand) &&
                Objects.equals(fabricationYear, trail.fabricationYear) &&
                Objects.equals(itpValidity, trail.itpValidity) &&
                Objects.equals(rcaInsuranceValidity, trail.rcaInsuranceValidity) &&
                Objects.equals(cmrInsuranceValidity, trail.cmrInsuranceValidity);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, companyId, uniqueIdentificationNumber, registrationNumber, brand, fabricationYear, itpValidity, rcaInsuranceValidity, cmrInsuranceValidity);
    }

    @Override
    public String toString() {
        return "Trail{" +
                "id=" + id +
                ", companyId=" + companyId +
                ", uniqueIdentificationNumber='" + uniqueIdentificationNumber + '\'' +
                ", registrationNumber='" + registrationNumber + '\'' +
                ", brand='" + brand + '\'' +
                ", fabricationYear=" + fabricationYear +
                ", ITPValidity=" + itpValidity +
                ", RCAInsuranceValidity=" + rcaInsuranceValidity +
                ", CMRInsuranceValidity=" + cmrInsuranceValidity +
                '}';
    }
}
