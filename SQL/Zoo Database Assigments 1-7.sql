USE db_zoo;

/* Assignment 1 */
SELECT * FROM tbl_habitat;

/* Assignment 2 - UPDATED */
SELECT species_name FROM tbl_species WHERE species_order = 3;

/* Assignment 3 - UPDATED */
SELECT nutrition_type FROM tbl_nutrition WHERE nutrition_cost <= 600;

/* Assignment 4 - UPDATED */
SELECT species_name FROM tbl_species WHERE species_nutrition BETWEEN 2202 AND 2206;

/* Assignment 5 - UPDATED */
SELECT species_name AS 'Species Name: ', tbl_nutrition.nutrition_type AS 'Nutrition Type' 
FROM tbl_species
INNER JOIN tbl_nutrition
ON tbl_species.species_nutrition = tbl_nutrition.nutrition_id
;

/* Assignment 6 */
SELECT specialist_fname, specialist_lname, specialist_contact 
FROM tbl_specialist
INNER JOIN tbl_care ON tbl_care.care_specialist = tbl_specialist.specialist_id
INNER JOIN tbl_species ON tbl_species.species_care = tbl_care.care_id
WHERE species_name = 'penguin'
;

/* Assignment 7 */
CREATE DATABASE company;

USE company;

CREATE TABLE tbl_departments (
	dept_name varchar(50) NOT NULL,
	suite_number varchar(50),
	building varchar(50),
	dept_head varchar(50) NOT NULL PRIMARY KEY
);

CREATE TABLE tbl_managers (
	emp_id varchar(50) NOT NULL PRIMARY KEY,
	emp_name varchar(50) FOREIGN KEY REFERENCES tbl_departments(dept_head),
	emp_address varchar(50),
	emp_phone varchar(50)
);

INSERT INTO tbl_departments
	(dept_name, suite_number, building, dept_head)
VALUES
	('research', '101', 'Building-A', 'Steve Olson'),
	('accounting', '101', 'Building-B', 'Brenda Slarng'),
	('shipping', '103', 'Building-A', 'John Grarglargang'),
	('development', '201', 'Building-C', 'Simon Jimnamebob'),
	('human resources', '202', 'Building-C', 'Melissa Nomorenames')
;

INSERT INTO tbl_managers
	(emp_id, emp_name, emp_address, emp_phone)
VALUES
	('021', 'Steve Olson', '564 Greang St', '654-321-9874'),
	('052', 'Brenda Slarng', '987 Miszlre Ln', '654-213-2871'),
	('043', 'John Grarglargang', '862 Blanrgea Pl', '654-159-5324'),
	('024', 'Simon Jimnamebob', '241 Smirzlean Ct', '654-954-3248'),
	('106', 'Melissa Nomorenames', '463 Mbrangles Lp', '654-856-4521')
;

SELECT dept_name, dept_head
FROM tbl_departments
INNER JOIN tbl_managers ON emp_name = tbl_departments.dept_head;