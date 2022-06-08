package com.backend.repository;

import com.backend.entity.Company;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CompanyRepository extends JpaRepository<Company, Long> {
    Company findByUsername(String username);
    Company findByCompanyName(String companyName);
}
