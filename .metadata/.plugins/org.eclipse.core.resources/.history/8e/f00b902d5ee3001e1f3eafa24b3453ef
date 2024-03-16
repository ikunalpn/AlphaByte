package com.curesync.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.curesync.model.PatientDetails;
import com.curesync.model.User;
import com.curesync.repo.PatientDetailsRepo;
import com.curesync.repo.UserRepo;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.nio.file.Path;


@Service
public class HomeService {

    @Autowired
    private UserRepo userRepo;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;
    
    @Autowired
    private PatientDetailsRepo detailsRepo;

    
    //signup
    public User signup(User user) {
        String encodedPassword = passwordEncoder.encode(user.getPassword());
        user.setPassword(encodedPassword);
        return userRepo.save(user);
    }
    
    
    //login
    public String login(String username, String password) {
        Optional<User> optionalUser = userRepo.findByUsername(username);

        if (optionalUser.isPresent()) {
            User user = optionalUser.get();
            
            if (passwordEncoder.matches(password, user.getPassword())) {
                return user.getRole();
            }
        }

        
        return "Failed";
    }
    
    //patient details
    public PatientDetails savePatientDetails(String patientName, float weight, float height, String bloodGroup,
            List<String> allergies, List<String> chronicIllness,
            MultipartFile mediclaimImage, MultipartFile labReportsImage,
            MultipartFile prescriptionImage, MultipartFile vaccinationImage,
            List<String> vaccDetails) {
			PatientDetails patientDetails = new PatientDetails();
			patientDetails.setPatientName(patientName);
			patientDetails.setWeight(weight);
			patientDetails.setHeight(height);
			patientDetails.setBloodGroup(bloodGroup);
			patientDetails.setAllergies(allergies);
			patientDetails.setChronicIllness(chronicIllness);
			patientDetails.setMediclaim(saveImageToStorage(mediclaimImage));
			patientDetails.setLabReports(saveImageToStorage(labReportsImage));
			patientDetails.setPrescription(saveImageToStorage(prescriptionImage));
			patientDetails.setVaccination(saveImageToStorage(vaccinationImage));
			patientDetails.setVaccDetails(vaccDetails);
			
			return detailsRepo.save(patientDetails);
	}
    
    private String saveImageToStorage(MultipartFile imageFile) {
        if (imageFile == null || imageFile.isEmpty()) {
            return null;
        }

        String fileName = UUID.randomUUID().toString() + "_" + imageFile.getOriginalFilename();
        String uploadDir = System.getProperty("user.dir") + "/uploads"; // or any other desired directory path

        try {
            Path uploadPath = Paths.get(uploadDir);
            Files.createDirectories(uploadPath);

            Path filePath = uploadPath.resolve(fileName);
            Files.write(filePath, imageFile.getBytes());

            return filePath.toString();
        } catch (IOException e) {
            e.printStackTrace();
            return null;
        }
    }
    
    
    
}
