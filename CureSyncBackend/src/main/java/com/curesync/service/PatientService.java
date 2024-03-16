package com.curesync.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.curesync.model.PatientDetails;
import com.curesync.repo.PatientDetailsRepo;

@Service
public class PatientService {
	
	@Autowired
	private PatientDetailsRepo detailsRepo;
	
	public PatientDetails update(String patientName,PatientDetails det) {
		
		PatientDetails details=detailsRepo.findByPatientName(patientName);
		
		details.setBp(det.getBp());
		details.setPulseRate(det.getPulseRate());
		details.setSpo2(det.getSpo2());
		details.setSugar(det.getSugar());
		details.setBodyTemp(det.getBodyTemp());
		
		return detailsRepo.save(details);
		
		
		
	}

}
