import express from 'express'
const router = express.Router()
import bodyParser from 'body-parser'
const User = require('../schema/user')

router.use(bodyParser.urlencoded({extended:true}))
router.use(bodyParser.json())

router.post('/insert', (req, res) => {
    const id = req.body.id;

    console.log(`dbTest - i/insert  id: ${id}`)

    User.find({}).then((users) => {
        res.render('mongoose', {users})
    })
    .catch((err) => {
        console.log(err)
    })


    // try{
    //     const users = await.User.find();
    //     res.render('mongoose', {users})

    // } catch(error){
    //     console.log(error)
    // }
})

module.exports = router;