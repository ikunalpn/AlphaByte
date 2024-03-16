package com.curesync.controller;

import java.io.File;
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
import com.curesync.repo.PatientDetailsRepo;
import com.curesync.service.HomeService;

@RestController
@CrossOrigin("*")
@RequestMapping("/curesync")
public class HomeController {

	private static final String UPLOAD_DIR = System.getProperty("user.dir") + "/uploads";
	@Autowired
	private HomeService service;
	
	@Autowired
	private PatientDetailsRepo details;
	
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
	        @RequestParam(value = "patientName", required = false, defaultValue = "USER") String patientName,
	        @RequestParam(value = "weight", required = false, defaultValue = "0.0") float weight,
	        @RequestParam(value = "height", required = false, defaultValue = "0.0") float height,
	        @RequestParam(value = "bloodGroup", required = false, defaultValue = " ") String bloodGroup,
	        @RequestParam(value = "allergies", required = false, defaultValue = " ") String allergiesStr,
	        @RequestParam(value = "chronicIllness", required = false, defaultValue = " ") String chronicIllnessStr,
	        // Other request parameters
	        @RequestParam(value = "mediClaimImage", required = false) MultipartFile mediclaimImage,
	        @RequestParam(value = "labReportsImage", required = false) MultipartFile labReportsImage,
	        @RequestParam(value = "presicriptionImage", required = false) MultipartFile prescriptionImage,
	        @RequestParam(value = "vaccinationImage", required = false) MultipartFile vaccinationImage,
	        @RequestParam(value = "vaccDetails", required = false, defaultValue = "0.0") String vaccDetailsStr) {
		
		PatientDetails pt=details.findByPatientName(patientName);
		List<String> chronicIllness = Arrays.asList(chronicIllnessStr.split(","));
		if(pt!=null) {
			pt.setHeight(height);
			pt.setWeight(weight);
			pt.setBloodGroup(bloodGroup);
			pt.setChronicIllness(chronicIllness);
			return ResponseEntity.ok(details.save(pt));
		}

	    List<String> allergies = Arrays.asList(allergiesStr.split(","));
	    
	    List<String> vaccDetails = Arrays.asList(vaccDetailsStr.split(","));

	    System.out.println(vaccDetails +" "+ allergies);
	    PatientDetails patientDetails = service.savePatientDetails(
	            patientName, weight, height, bloodGroup, allergies, chronicIllness,
	            mediclaimImage, labReportsImage, prescriptionImage, vaccinationImage,
	            vaccDetails);

	    return ResponseEntity.ok(patientDetails);
	}
	
	@PostMapping("/mediclaim")
	public ResponseEntity<PatientDetails> saveMediclaim(@RequestParam("patientName")String patientName,
			@RequestParam("mediclaimImage") MultipartFile mediclaimImage){
			return ResponseEntity.ok(service.saveClaim(patientName, mediclaimImage));
	}
	@PostMapping("/labreport")
	public ResponseEntity<PatientDetails> saveLab(@RequestParam("patientName")String patientName,
			@RequestParam("labReportImage") MultipartFile mediclaimImage){
			return ResponseEntity.ok(service.saveLab(patientName, mediclaimImage));
	}
	@PostMapping("/prescription")
	public ResponseEntity<PatientDetails> savePrescription(@RequestParam("patientName")String patientName,
			@RequestParam("prescriptionImage") MultipartFile mediclaimImage){
			return ResponseEntity.ok(service.savePrescription(patientName, mediclaimImage));
	}
	@PostMapping("/vaccination")
	public ResponseEntity<PatientDetails> saveVaccination(@RequestParam("patientName")String patientName,
			@RequestParam("vaccinationImage") MultipartFile mediclaimImage){
			return ResponseEntity.ok(service.saveVaccination(patientName, mediclaimImage));
	}
	
	
	 @GetMapping("/details/{patientName}")
	    public ResponseEntity<PatientDetails> getPatientDetailsWithImages(@PathVariable String patientName) {
	        PatientDetails patientDetails = service.getPatientDetailsByName(patientName);
	        if (patientDetails != null) {
	            // Append image URLs to the patient details
	            patientDetails.setMediclaim(getImageUrl(patientDetails.getMediclaim()));
	            patientDetails.setLabReports(getImageUrl(patientDetails.getLabReports()));
	            patientDetails.setPrescription(getImageUrl(patientDetails.getPrescription()));
	            patientDetails.setVaccination(getImageUrl(patientDetails.getVaccination()));

	            return ResponseEntity.ok().body(patientDetails);
	        } else {
	            return ResponseEntity.notFound().build();
	        }
	    }
	 
	 private String getImageUrl(String imagePath) {
	        if (imagePath == null) {
	            return null;
	        }
	        // Construct and return the URL of the image
	        return "/images/" + new File(imagePath).getName();
	    }

}
