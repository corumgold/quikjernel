const router = require("express").Router();
const { Entry } = require("../db");

router.get("/", async (req, res, next) => {
  try {
    res.send(await Entry.findAll());
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    res.status(201).send(await Entry.create(req.body));
  } catch (error) {
    next(error);
  }
});

module.exports = router;
