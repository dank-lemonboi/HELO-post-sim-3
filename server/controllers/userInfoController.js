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
            db.default_search_users([req.user.user_id, req.params.pg]).then( users => {
                console.log(users)
                db.get_friends([req.user.user_id]).then( friends => {
                    console.log(friends)
                })
            } )
        } else if (req.query.optionVal === 'first_name' && req.query.inputVal !== '') {
            db.search_users_first([req.query.inputVal, req.user.user_id, +req.params.pg]).then( users => {
                db.get_friends([req.user.user_id]).then( friends => {

                })
            } )
        } else if (req.query.optionVal === 'last_name' && req.query.inputVal !== '') {
            db.search_users_last([req.query.inputVal, req.user.user_id, +req.params.pg]).then( users => {
                db.get_friends([req.user.user_id]).then( friends => {

                })
            } )
        }
        console.log(req.user.user_id, req.query, req.params.pg)
    },
    addFriend: (req, res) => {
        const db = req.app.get('db')
        console.log(req.user.user_id, req.body.friendId)
        db.add_friend([req.user.user_id, req.body.friendId]).then( users => {
            res.status(200).send(users)
        })
    }

}

