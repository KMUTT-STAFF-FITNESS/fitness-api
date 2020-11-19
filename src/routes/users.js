const express = require("express");
const passport = require("passport");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const router = express.Router();
const queries = require("../db/queries");

const upload = multer({
  dest: "./uploads/files",
  // you might also want to set some limits: https://github.com/expressjs/multer#limits
});

const handleError = (err, res) => {
  res.status(500).contentType("text/plain").end("Oops! Something went wrong!");
};

router.get("/users", (req, res) => {
  queries.users.getAll().then((users) => {
    res.json(users);
  });
});

router.get("/users/:id", (req, res) => {
  queries.users.getById(req.params.id).then((user) => res.json(user));
});

router.post("/users", (req, res) => {
  queries.users.createUser(req.body).then((result) => res.send(result));
});

// router.post(
//   "/login",
//   passport.authenticate("ldapauth", { session: false }),
//   function (req, res) {
//     res.send("status : ",res);
//   }
// );

router.post("/login", function (req, res, next) {
  passport.authenticate("ldapauth", { session: false }, function (
    err,
    user,
    info
  ) {
    if (err) {
      return next(err); // will generate a 500 error
    }
    // Generate a JSON response reflecting authentication status
    if (!user) {
      return res.send({ success: false, message: "authentication failed" });
    }
    return res.send({ success: true, message: "authentication succeeded" });
  })(req, res, next);
});

//nfc checkin
router.post("/nfc", (req, res) => {
  queries.nfc.checkIn(req.body).then((result) => res.send(result));
});

//notification
router.get("/notification", (req, res) => {
  queries.notification.getNoti().then((noti) => res.json(noti));
});

router.get("/notification/:id", (req, res) => {
  queries.notification
    .getNotiById(req.params.id)
    .then((noti) => res.json(noti));
});

router.post("/notification", (req, res) => {
  queries.notification.createNoti(req.body).then((result) => res.send(result));
});

//report
router.get("/report/problem", (req, res) => {
  queries.report.getReport().then((report) => res.json(report));
});

router.post("/report/problem", (req, res) => {
  queries.report.createReport(req.body).then((result) => res.send(result));
});

router.get("/report/template/:id", (req, res) => {
  queries.report
    .getReportTemplateById(req.params.id)
    .then((template) => res.json(template));
});

router.post("/report/template", (req, res) => {
  queries.report
    .createReportTemplate(req.body)
    .then((result) => res.send(result));
});

//machine
router.post("/machine", (req, res) => {
  queries.machine.createMachine(req.body).then((result) => res.send(result));
});

router.get("/machine", (req, res) => {
  queries.machine.getAllMachine().then((machine) => res.json(machine));
});

router.get("/machine/:id", (req, res) => {
  queries.machine
    .getMachineById(req.params.id)
    .then((machine) => res.json(machine));
});

router.get("/machine/:id/howtoplay", (req, res) => {
  queries.machine
    .getMachineHowToPlay(req.params.id)
    .then((howto) => res.json(howto));
});

//exercise
router.get("/exercise/:id", (req, res) => {
  queries.exercise
    .getExerciseByUserId(req.params.id)
    .then((exercise) => res.json(exercise));
});

router.post("/exercise", (req, res) => {
  queries.exercise.createExercise(req.body).then((result) => res.send(result));
});

//membertype
router.get("/membertype", (req, res) => {
  queries.member.getMemberType().then((membertype) => res.json(membertype));
});

// Upload
router.post(
  "/upload",
  upload.single("file" /* name attribute of <file> element in your form */),
  (req, res) => {
    console.log(req.file);
    const tempPath = req.file.path;
    // const targetPath = path.join(
    //   __dirname,
    //   `./uploads/files/images.png`
    // );
    const targetPath = `${req.file.path}.png`;

    if (path.extname(req.file.originalname).toLowerCase() === ".png") {
      console.log("trrueeeee");
      fs.rename(tempPath, targetPath, (err) => {
        if (err) {
          return handleError(err, res);
        }

        res.status(200).contentType("text/plain").end("File uploaded!");
      });
    } else {
      fs.unlink(tempPath, (err) => {
        if (err) {
          return handleError(err, res);
        }

        res
          .status(403)
          .contentType("text/plain")
          .end("Only .png files are allowed!");
      });
    }
  }
);

module.exports = router;
