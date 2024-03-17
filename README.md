# CureSync



CureSync is an advanced healthcare management system designed to revolutionize medical practices for both doctors and patients. With CureSync, doctors can efficiently manage appointments, prescriptions, patient records, and more, while patients can seamlessly access their medical information and interact with healthcare professionals.

Check out our [demo video](https://youtu.be/4ZeCq2CGJAg) to see MedVault+ in action!

## Features

- **Appointment Management**: Schedule, reschedule, and cancel appointments with ease.
- **Prescription Management**: Create, update, and manage prescriptions digitally.
- **Patient Records**: Maintain detailed records of patient information, including medical history, lab reports, and vaccination records.
- **User Authentication**: Secure login system for both doctors and patients.
- **Role-based Access**: Different levels of access for doctors and patients to ensure data privacy.
- **File Upload**: Seamlessly upload and store medical documents and images.

## Technologies Used

- **Angular**: Frontend development framework for building responsive web applications.
- **Spring Boot**: Backend framework for developing robust and scalable Java applications.
- **MySQL**: Relational database management system for storing and retrieving data.
- **Tailwind CSS**: CSS framework for designing modern and responsive user interfaces.
- **Material Design**: UI component library for Angular applications.

## Getting Started

To get started with the Spring Boot backend of MedVault+, follow these steps:

1. Clone the Repository: `git clone https://github.com/supranshu/MedVaultPlus.git`
2. Navigate to the Backend Directory:cd CureSyncBacktend
3. Set Up the Database:
- Ensure that MySQL is installed on your system.
- Create a new MySQL database named `curesync`.
- Open the `application.properties` file located at `src/main/resources` and configure the database connection properties:
  ```
  spring.datasource.url=jdbc:mysql://localhost:3306/curesync
  spring.datasource.username=your_username
  spring.datasource.password=your_password
  ```

4. Run the Application:
- Build the project using Maven:
  ```
  mvn clean install
  ```
- Run the Spring Boot application:
  ```
  mvn spring-boot:run

  
To get started with CureSync Frontend, follow these steps:

1. Clone the repository: `git clone https://github.com/supranshu/MedVaultPlus.git`
2. Navigate to the project directory: `cd CureSyncFrontend`
3. Install dependencies: `npm install`
4. Run the frontend application: `ng serve`


  
   

1. Login Page
   ![image](https://github.com/supranshu/AlphaByte/assets/120621694/3e3506d1-c56b-4165-9164-14570a3fe540)


2. Doctor Dashboard
  ![image](https://github.com/supranshu/AlphaByte/assets/120621694/b7750fa6-a37f-4ab5-922c-7a37b22ec3dc)


3. Patient Dashboard
   ![image](https://github.com/supranshu/AlphaByte/assets/120621694/6a6deab7-87cb-4b99-9d12-fccc6128aca1)

4. Lab Reports
   ![image](https://github.com/supranshu/AlphaByte/assets/120621694/511075e1-d085-4dc6-811d-6000d98556b6)


4. Video Demonstration (CLICK ON ABOVE IMAGE TO WATCH VIDEO)
   [![MedVault+ Demo Video](https://img.youtube.com/vi/4ZeCq2CGJAg/0.jpg)](https://youtu.be/4ZeCq2CGJAg)


