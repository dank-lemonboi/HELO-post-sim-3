CREATE TABLE friends (
    relationship_id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES 
            users(user_id),
    friend_id INTEGER REFERENCES
            users(user_id)
)