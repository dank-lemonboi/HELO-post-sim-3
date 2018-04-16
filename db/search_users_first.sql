SELECT * FROM users
WHERE first_name = $1 and user_id != $2
OFFSET ($3 * 4) - 4
LIMIT 4