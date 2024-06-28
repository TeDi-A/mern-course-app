const { Signup, getUsers, Login } = require("../Controllers/AuthController");
const { userVerification } = require("../middlewares/AuthMiddleware")
const router = require("express").Router();

router.post("/signup", Signup);
router.get("/users", getUsers)
router.post("/login", Login)
router.post("/", userVerification)

module.exports = router;