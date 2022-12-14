const router = require("express").Router();

const users = [];

router.get('/users', ()=>{}, (req, res) => {
    console.log('api/user called');
    res.json(users);
});

router.post("/user", (req, res) => {
    const user = req.body.user;
    console.log("adding user:::::", user);
    users.push(user);
    res.json("user added");
});

module.exports = router;

