package com.curesync.controller;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.curesync.model.PatientDetails;
import com.curesync.model.User;
import com.curesync.service.HomeService;

@RestController
@CrossOrigin("*")
@RequestMapping("/curesync")
public class HomeController {

	@Autowired
	private HomeService service;
	
	@GetMapping("/login/{username}/{password}")
	public ResponseEntity<String> login(@PathVariable("username")String username,@PathVariable("password")String password) {
		return service.login(username, password);
	}
	
	@PostMapping("/signup")
	public User signup(@RequestBody User user) {
		return service.signup(user);
	}
	
	
	@PostMapping("/details")
	public ResponseEntity<PatientDetails> savePatientDetails(
	        @RequestParam("patientName") String patientName,
	        @RequestParam(value = "weight", required = false, defaultValue = "0.0") float weight,
	        @RequestParam(value = "height", required = false, defaultValue = "0.0") float height,
	        @RequestParam("bloodGroup") String bloodGroup,
	        @RequestParam("allergies") String allergiesStr,
	        @RequestParam("chronicIllness") String chronicIllnessStr,
	        // Other request parameters
	        @RequestParam("mediclaimImage") MultipartFile mediclaimImage,
	        @RequestParam("labReportsImage") MultipartFile labReportsImage,
	        @RequestParam("prescriptionImage") MultipartFile prescriptionImage,
	        @RequestParam("vaccinationImage") MultipartFile vaccinationImage,
	        @RequestParam("vaccDetails") String vaccDetailsStr) {

	    List<String> allergies = Arrays.asList(allergiesStr.split(","));
	    List<String> chronicIllness = Arrays.asList(chronicIllnessStr.split(","));
	    List<String> vaccDetails = Arrays.asList(vaccDetailsStr.split(","));

	    System.out.println(vaccDetails +" "+ allergies);
	    PatientDetails patientDetails = service.savePatientDetails(
	            patientName, weight, height, bloodGroup, allergies, chronicIllness,
	            mediclaimImage, labReportsImage, prescriptionImage, vaccinationImage,
	            vaccDetails);

	    return ResponseEntity.ok(patientDetails);
	}

}
