const express = require("express");
const router = express.Router();
const connection = require('../Db_Config/db_config');

router.post('/', (req, res) => {
    connection.query(`SELECT * FROM users_data WHERE mobile_number=${req.body.mobile} AND user_password=${req.body.password}`, (err, data) => {
            if(err){
                err.queryMessage="Incorrect Login Credentials";
                res.send(err);
            }else{
                var newMessage = {};
                newMessage.queryMessage = "Successfully LoggedIn!";
                data.push(newMessage);
                res.send(data);
            }
        });
})

router.post('/signup', (req, res) => {
    var queryInsertData = `INSERT INTO users_data (id, user_name, mobile_number, user_email, user_password) 
        VALUES ('','${req.body.name}','${req.body.mobile}','${req.body.email}','${req.body.password}')`;

    connection.query(queryInsertData, 
        (err, data) => {
        if(err) {
            err.queryMessage = "Mobile Number Already Exist";
            res.send(err);
        }else{
            data.queryMessage = "User Successfully Created!";
            res.send(data);
        }
    });
})

module.exports = router;