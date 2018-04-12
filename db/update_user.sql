UPDATE users 
SET first_name = $1, last_name = $2, gender = $3, hair_color = $4, eye_color = $5, hobby = $6, birth_day = $7, birth_month = $8, birth_year = $9
WHERE user_id = $10
-- RETURNING *;
