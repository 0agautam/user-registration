const User1      = require('../models/users.model')

//show list of Users
const index = (req, res, next) =>{
    User1.find()
    .then(users => res.json({users}))
    .catch(error => {
        res.json({
            message: `An Error Occured!!!${error}`
        })
    })
}

// show single User
const show = (req, res, next) => {
    let userID = req.params.id
    User1.findById(userID)
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message: `An Error Occured!!!${error}`
        })
    })
}

// store the User 
const store = (req, res, next) => {
    const newUser = new User1({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        phone: req.body.phone,
        image: req.body.image
    })

    // if(req.file){
    //     newUser.image = req.file.path
    // }
    // if(req.files){
    //     let path = ''
    //     req.files.forEach(function(files, index, arr) {
    //         path = path + files.path + ','
    //     })
    //     path = path.substring(0, path.lastIndexOf(","))
    //     user.image = path
    // }
    
    newUser.save()
    .then(response =>{
        res.json({
            message: 'User Added Successfully!!!'
        })
    })
    .catch(error => {
        res.json({
            message: `An Error Occured While StoringData!!!${error}`
        })
    })
}

// update a user
const update = (req, res, next) => {
    let userID = req.params.id

    let updatedData = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        phone: req.body.phone,
        image: req.body.image 
    }

    User1.findByIdAndUpdate(userID, {$set: updatedData})
    .then(() => {
        res.json({
            message: 'User Updated Successfully!!!'
        })
    })
    .catch(() => {
        res.json({
            message: `An error Occured while Updating!!!`
        })
    })
}

// delete an User

const destroy = (req, res, next) => {
    let userID = req.params.id
    User1.findByIdAndRemove(userID)
    .then(() => {
        res.json({
            message: `User Deleted Successfully ${userID}`
        })
    })
    .catch(() =>{
        res.json({
            message: 'An error Occured while Deleting!!!'
        })
    })
}


module.exports = {
    index, show, store, update, destroy
}