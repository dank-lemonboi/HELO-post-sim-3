module.exports = {
    update: (req, res) => {
        const { firstName, lastName, gender, hairColor, eyeColor, hobby, birthdayDay, birthdayMonth, birthdayYear, user_id } = req.body;
        const db = req.app.get('db')
        db.update_user([firstName, lastName, gender, hairColor, eyeColor, hobby, birthdayDay, birthdayMonth, birthdayYear, +user_id]).then( user => {
            res.status(200).send()
        })
    },
    getUsers: (req, res) => {
         const db = req.app.get('db')
        db.get_users([req.user.user_id]).then( users => {
            res.status(200).send(users)
        })
    },
    search: (req, res) => {
        const db = req.app.get('db')
        if(req.query.optionVal === '' && req.query.inputVal === '') {
            db.search_users([req.user.user_id, req.params.pg]).then( users => {
                // console.log(users)
                res.status(200).send(users)
            } )
        }
        console.log(req.user.user_id, req.query, req.params.pg)
    }

}

