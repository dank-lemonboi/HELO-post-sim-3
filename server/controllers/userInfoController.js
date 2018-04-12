module.exports = {
    update: (req, res) => {
        const { firstName, lastName, gender, hairColor, eyeColor, hobby, birthdayDay, birthdayMonth, birthdayYear, user_id } = req.body;
        const db = req.app.get('db')
        db.update_user([firstName, lastName, gender, hairColor, eyeColor, hobby, birthdayDay, birthdayMonth, birthdayYear, +user_id]).then( user => {
            res.status(200).send()
        })
    }

}

// ,
//     getusers: (req, res) => {
//         const db = req.app.get('db')
//     }