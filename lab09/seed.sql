INSERT INTO patients (name, date_of_birth, gender, contact_info) VALUES
('Alice Smith', '1990-01-01', 'Female', '123-456-7890'),
('Bob Johnson', '1985-05-15', 'Male', '987-654-3210');

INSERT INTO doctors (name, specialty, contact_info) VALUES
('Dr. John Doe', 'Cardiology', 'john.doe@hospital.com'),
('Dr. Jane Roe', 'Neurology', 'jane.roe@hospital.com');

INSERT INTO appointments (patient_id, doctor_id, appointment_date, status) VALUES
(1, 1, '2024-08-01', 'Scheduled'),
(2, 2, '2024-08-02', 'Completed');

INSERT INTO departments (name, location) VALUES
('Emergency', 'Building A'),
('Pediatrics', 'Building B');

INSERT INTO treatments (name, description, cost) VALUES
('X-Ray', 'Radiographic imaging', 100.00),
('MRI', 'Magnetic Resonance Imaging', 500.00);
