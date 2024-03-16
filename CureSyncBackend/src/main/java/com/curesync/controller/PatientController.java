package com.curesync.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.curesync.model.PatientDetails;
import com.curesync.service.HomeService;
import com.curesync.service.PatientService;

@RestController
@CrossOrigin("*")
@RequestMapping("/curesync")
public class PatientController {
	
	@Autowired
	private PatientService service;
	
	@PostMapping("/update-details/{patientName}")
	public PatientDetails putDetails(@PathVariable("patientName") String patientName, @RequestBody PatientDetails details) {
		
		return service.update(patientName, details);
	}

}
