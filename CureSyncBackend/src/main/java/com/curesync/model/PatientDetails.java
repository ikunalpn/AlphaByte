package com.curesync.model;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class PatientDetails {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long patientId;
	private String patientName;
	private float weight;
	private float height;
	private String bloodGroup;
	private List<String> allergies;
	private List<String> chronicIllness;
	private String mediclaim;
	private String labReports;
	private String prescription;
	private String vaccination;
	private List<String> vaccDetails;
	public long getPatientId() {
		return patientId;
	}
	public void setPatientId(long patientId) {
		this.patientId = patientId;
	}
	public String getPatientName() {
		return patientName;
	}
	public void setPatientName(String patientName) {
		this.patientName = patientName;
	}
	public float getWeight() {
		return weight;
	}
	public void setWeight(float weight) {
		this.weight = weight;
	}
	public float getHeight() {
		return height;
	}
	public void setHeight(float height) {
		this.height = height;
	}
	public String getBloodGroup() {
		return bloodGroup;
	}
	public void setBloodGroup(String bloodGroup) {
		this.bloodGroup = bloodGroup;
	}
	public List<String> getAllergies() {
		return allergies;
	}
	public void setAllergies(List<String> allergies) {
		this.allergies = allergies;
	}
	public List<String> getChronicIllness() {
		return chronicIllness;
	}
	public void setChronicIllness(List<String> chronicIllness) {
		this.chronicIllness = chronicIllness;
	}
	public String getMediclaim() {
		return mediclaim;
	}
	public void setMediclaim(String mediclaim) {
		this.mediclaim = mediclaim;
	}
	public String getLabReports() {
		return labReports;
	}
	public void setLabReports(String labReports) {
		this.labReports = labReports;
	}
	public String getPrescription() {
		return prescription;
	}
	public void setPrescription(String prescription) {
		this.prescription = prescription;
	}
	public String getVaccination() {
		return vaccination;
	}
	public void setVaccination(String vaccination) {
		this.vaccination = vaccination;
	}
	public List<String> getVaccDetails() {
		return vaccDetails;
	}
	public void setVaccDetails(List<String> vaccDetails) {
		this.vaccDetails = vaccDetails;
	}
	@Override
	public String toString() {
		return "PatientDetails [patientId=" + patientId + ", patientName=" + patientName + ", weight=" + weight
				+ ", height=" + height + ", bloodGroup=" + bloodGroup + ", allergies=" + allergies + ", chronicIllness="
				+ chronicIllness + ", mediclaim=" + mediclaim + ", labReports=" + labReports + ", prescription="
				+ prescription + ", vaccination=" + vaccination + ", vaccDetails=" + vaccDetails + "]";
	}
	public PatientDetails(long patientId, String patientName, float weight, float height, String bloodGroup,
			List<String> allergies, List<String> chronicIllness, String mediclaim, String labReports,
			String prescription, String vaccination, List<String> vaccDetails) {
		super();
		this.patientId = patientId;
		this.patientName = patientName;
		this.weight = weight;
		this.height = height;
		this.bloodGroup = bloodGroup;
		this.allergies = allergies;
		this.chronicIllness = chronicIllness;
		this.mediclaim = mediclaim;
		this.labReports = labReports;
		this.prescription = prescription;
		this.vaccination = vaccination;
		this.vaccDetails = vaccDetails;
	}
	public PatientDetails() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	
	
	
}
