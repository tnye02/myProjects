USE db_zoo;

/* Assignment 1 */
SELECT * FROM tbl_habitat;

/* Assignment 2 */
SELECT * FROM tbl_species WHERE species_order = 3;

/* Assignment 3 */
SELECT * FROM tbl_nutrition WHERE nutrition_cost <= 600;

/* Assignment 4 */
SELECT * FROM tbl_species WHERE species_nutrition BETWEEN 2202 AND 2206;

/* Assignment 5 */
SELECT species_name AS 'Species Name: ', species_nutrition AS 'Nutrition Type' FROM tbl_species;

/* Assignment 6 */
SELECT specialist_fname, specialist_lname, specialist_contact 
FROM tbl_specialist
INNER JOIN tbl_care ON tbl_care.care_specialist = tbl_specialist.specialist_id
INNER JOIN tbl_species ON tbl_species.species_care = tbl_care.care_id
WHERE species_name = 'penguin'
;