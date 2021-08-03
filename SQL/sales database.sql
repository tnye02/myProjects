USE db_zoo;


SELECT species_name FROM tbl_species WHERE species_order = 3;


SELECT nutrition_type FROM tbl_nutrition WHERE nutrition_cost <= 600;

SELECT species_name FROM tbl_species WHERE species_nutrition BETWEEN 2202 AND 2206;

SELECT species_name AS 'Species Name: ', tbl_nutrition.nutrition_type AS 'Nutrition Type' 
FROM tbl_species
INNER JOIN tbl_nutrition
ON tbl_species.species_nutrition = tbl_nutrition.nutrition_id
;

SELECT * FROM tbl_species;
SELECT * FROM tbl_nutrition;