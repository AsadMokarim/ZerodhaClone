const { Signup, Login } = require("../Controllers/AuthController");
const { userVerification } = require("../Middlewares/AuthMiddleware");

const router = require("express").Router();

router.get("/", (req, res)=>{
    res.send("auth page");
    console.log("auth page requested")
})

router.post("/", userVerification)
router.post("/signup", Signup);
router.post("/login", Login);

module.exports = router;