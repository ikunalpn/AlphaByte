package com.curesync.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.curesync.model.PatientDetails;

@Repository
public interface PatientDetailsRepo extends JpaRepository<PatientDetails, Long> {
	
	
	PatientDetails findByPatientName(String patientName);

}
