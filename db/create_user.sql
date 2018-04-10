INSERT INTO users (
    first_name,
    last_name,
    picture,
    auth_id
)

VALUES (
    $1,
    $2,
    $3,
    $4
)
RETURNING *;