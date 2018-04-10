CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    first_name VARCHAR(150),
    last_Name VARCHAR(150),
    gender VARCHAR(150),
    hair_color VARCHAR(150),
    eye_color VARCHAR(150),
    hobby VARCHAR(150),
    birth_day INTEGER,
    birth_month TEXT,
    birth_year INTEGER,
    picture VARCHAR(500),
    auth_id VARCHAR(500)
)