const express = require("express");
const passport = require("passport");
const expressMinio = require("express-middleware-minio");
const minioMiddleware = expressMinio.middleware();

const router = express.Router();
const queries = require("../db/queries");

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
  queries.notification.getNotiById(req.params.id).then((noti) => res.json(noti));
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

//exercise
router.get("/exercise/:id", (req, res) => {
  queries.exercise
    .getExerciseByUserId(req.params.id)
    .then((exercise) => res.json(exercise));
});

router.post("/exercise", (req, res) => {
  queries.exercise.createExercise(req.body).then((result) => res.send(result));
});

// // Upload a file
// router.post(
//   "/api/files",
//   minioMiddleware({ op: expressMinio.Ops.post }),
//   (req, res) => {
//     if (req.minio.error) {
//       res.status(400).json({ error: req.minio.error });
//     } else {
//       res.send({ filename: req.minio.post.filename });
//     }
//   }
// );

// // List all files
// router.get(
//   "/api/files",
//   minioMiddleware({ op: expressMinio.Ops.list }),
//   (req, res) => {
//     if (req.minio.error) {
//       res.status(400).json({ error: req.minio.error });
//     } else {
//       res.send(req.minio.list);
//     }
//   }
// );

// // Download a file
// router.get(
//   `/api/files/:filename`,
//   minioMiddleware({ op: expressMinio.Ops.getStream }),
//   (req, res) => {
//     if (req.minio.error) {
//       res.status(400).json({ error: req.minio.error });
//       return;
//     }

//     res.attachment(req.minio.get.originalName);
//     req.minio.get.stream.pipe(res);
//   }
// );

// // Delete a file
// router.delete(
//   "/api/files/:filename",
//   minioMiddleware({ op: expressMinio.Ops.delete }),
//   (req, res) => {
//     if (req.minio.error) {
//       res.status(400).json({ error: req.minio.error });
//     } else {
//       res.send(req.minio.delete);
//     }
//   }
// );
module.exports = router;
