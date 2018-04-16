SELECT * FROM users
WHERE user_id != $1
OFFSET ($2 * 4) - 4
LIMIT 4