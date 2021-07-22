const router = require("express").Router();
const sessionRouter = require("./session.js");
const usersRouter = require("./users.js");
const businessRouter = require("./business");
const reviewsRouter = require("./reviewRouter");

// Use your router here
router.use("/session", sessionRouter);
router.use("/users", usersRouter);
router.use("/business", businessRouter);
router.use("/business", reviewsRouter);
//router.use(“/businesses/:business_id/reviews”, reviewsRouter)

module.exports = router;
