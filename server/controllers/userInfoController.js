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
                
                db.get_friends([req.user.user_id]).then( friends => {
                    for (let i = 0; i < users.length; i++){
                        // assign a friend key which defaults to false
                        users[i].isFriend = false;
                        for(let j = 0; j < friends.length; j++) {
                            // compare users array to friends array and change the friend key's value
                            // to true if the users are friends with the session user
                            if (friends[j].friend_id === users[i].user_id) {
                                users[i].isFriend = true;
                            }
                        }
                    }
                    // console.log(users)
                    res.status(200).send(users)
                })
            } )
        } else if (req.query.optionVal === 'first_name' && req.query.inputVal !== '') {
            db.search_users_first([req.query.inputVal, req.user.user_id, +req.params.pg]).then( users => {
                db.get_friends([req.user.user_id]).then( friends => {
                    for (let i = 0; i < users.length; i++){
                        // assign a friend key which defaults to false
                        users[i].isFriend = false;
                        for(let j = 0; j < friends.length; j++) {
                            // compare users array to friends array and change the friend key's value
                            // to true if the users are friends with the session user
                            if (friends[j].friend_id === users[i].user_id) {
                                users[i].isFriend = true;
                            }
                        }
                    }
                    // console.log(users)
                    res.status(200).send(users)
                })
            } )
        } else if (req.query.optionVal === 'last_name' && req.query.inputVal !== '') {
            db.search_users_last([req.query.inputVal, req.user.user_id, +req.params.pg]).then( users => {
                db.get_friends([req.user.user_id]).then( friends => {
                    for (let i = 0; i < users.length; i++){
                        // assign a friend key which defaults to false
                        users[i].isFriend = false;
                        for(let j = 0; j < friends.length; j++) {
                            // compare users array to friends array and change the friend key's value
                            // to true if the users are friends with the session user
                            if (friends[j].friend_id === users[i].user_id) {
                                users[i].isFriend = true;
                            }
                        }
                    }
                    // console.log(users)
                    res.status(200).send(users)
                })
            } )
    }
},
    addFriend: (req, res) => {
        const db = req.app.get('db')
        // console.log(req.user.user_id, req.body.friendId)
        db.add_friend([req.user.user_id, req.body.friendId]).then( users => {
            res.status(200).send(users)
        })
    },
      remove: (req, res) => {
          const db = req.app.get("db")
          db.remove_friend([req.body.friendId, req.user.user_id]).then( users => {
          res.status(200).send(users)
      })
 },
     count: (req, res) => {
         const db = req.app.get('db')
         db.all_users([req.user.user_id]).then( friends => {
         res.status(200).send(friends)
     })
 }
}

