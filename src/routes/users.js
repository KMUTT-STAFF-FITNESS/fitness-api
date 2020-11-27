const express = require("express");
const passport = require("passport");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const axios = require("axios");

const router = express.Router();
const queries = require("../db/queries");

const upload = multer({
  dest: "public/images",
  // you might also want to set some limits: https://github.com/expressjs/multer#limits
});

const checkAuth = (req, res, next) => {
  const headers = {
    Authorization: req.headers.authorization,
  };
  axios
    .get("https://gatewayservice.sit.kmutt.ac.th/api/me", { headers: headers })
    .then((data) => {
      next();
    })
    .catch((err) => {
      console.log("check Auth err === " + err);
      res.status(401);
      return err;
    });
};

const handleError = (err, res) => {
  res.status(500).contentType("text/plain").end("Oops! Something went wrong!");
};

router.put(
  "/approve",
  (req, res, next) => {
    checkAuth(req, res, next);
  },
  (req, res) => {
    queries.users.approveUser(req.body).then((result) => res.sendStatus(200));
  }
);

router.get(
  "/users",
  (req, res, next) => {
    checkAuth(req, res, next);
  },
  (req, res) => {
    queries.users.getAll().then((users) => {
      res.json(users);
    });
  }
);

router.put(
  "/user",
  (req, res, next) => {
    checkAuth(req, res, next);
  },
  (req, res) => {
    queries.users.deleteUser(req.body).then((result) => res.sendStatus(200));
  }
);

router.put(
  "/user/:id",
  (req, res, next) => {
    checkAuth(req, res, next);
  },
  (req, res) => {
    queries.users
      .editUser(req.body, req.params.id)
      .then((result) => res.sendStatus(200));
  }
);

router.get(
  "/users/:id",
  (req, res, next) => {
    checkAuth(req, res, next);
  },
  (req, res) => {
    queries.users.getById(req.params.id).then((user) => res.json(user));
  }
);
router.get(
  "/userspending",
  (req, res, next) => {
    checkAuth(req, res, next);
  },
  (req, res) => {
    queries.users.getPendingUsers().then((users) => {
      res.json(users);
    });
  }
);

// router.get(
//   "/users/pending",
//   (req, res, next) => {
//     checkAuth(req, res, next);
//   },
//   (req, res) => {
//     queries.users.getPendingUsers().then((user) => res.json(user));
//   }
// );

router.get("/user/type/:user_id", (req, res) => {
  queries.users.getByUserId(req.params.user_id).then((user) => res.json(user));
});

router.post(
  "/users",
  (req, res, next) => {
    checkAuth(req, res, next);
  },
  (req, res) => {
    queries.users.createUser(req.body).then((result) => res.send(result));
  }
);
router.post(
  "/pay",
  (req, res, next) => {
    checkAuth(req, res, next);
  },
  (req, res) => {
    queries.payment.createCashPay(req.body).then((result) => res.send(result));
  }
);

router.post("/login", (req, res) => {
  const client_id = "u1UOLdKI";
  const client_secret = "uv2g9UsBDV0rwlNQZJn4mL3XH";
  const redirect_uri = "http://localhost:3000/checking";
  const code = req.body.code;

  axios
    .get(
      `https://gatewayservice.sit.kmutt.ac.th/api/oauth/token?client_secret=${client_secret}&client_id=${client_id}&code=${code}&redirect_uri=${redirect_uri}`
    )
    .then((data) => {
      res.json(data.data);
    })
    .catch((err) => {
      console.log("error => " + err);
    });
});

//notification
router.get(
  "/notification",
  (req, res, next) => {
    checkAuth(req, res, next);
  },
  (req, res) => {
    queries.notification.getNoti().then((noti) => res.json(noti));
  }
);

router.get(
  "/notification/:id",
  (req, res, next) => {
    checkAuth(req, res, next);
  },
  (req, res) => {
    queries.notification
      .getNotiById(req.params.id)
      .then((noti) => res.json(noti));
  }
);

router.post(
  "/notification",
  (req, res, next) => {
    checkAuth(req, res, next);
  },
  (req, res) => {
    const message = {
      app_id: "51d6d36f-d9b7-4659-abc0-9d61c025d1a0",
      headings: { en: req.body.message_title },
      contents: { en: req.body.content },
      included_segments: ["All"],
    };

    const headers = {
      "Content-Type": "application/json; charset=utf-8",
      Authorization: "Basic MDc1ZjE0MmEtNjU5Ni00MjA3LWE3YTktZjJlMDk5MDM0ODRj",
    };

    axios
      .post("https://onesignal.com/api/v1/notifications", message, {
        headers: headers,
      })
      .then((data) => {
        console.log("Send Noti Completed == " + data.data);
      })
      .catch((err) => {
        console.log("send noti error ==> " + err);
      });

    queries.notification
      .createNoti(req.body)
      .then((result) => res.send(result));
  }
);

//report
router.get(
  "/report/problem",
  (req, res, next) => {
    checkAuth(req, res, next);
  },
  (req, res) => {
    queries.report.getReport().then((report) => res.json(report));
  }
);

router.post(
  "/report/problem",
  (req, res, next) => {
    checkAuth(req, res, next);
  },
  (req, res) => {
    queries.report.createReport(req.body).then((result) => res.send(result));
  }
);

router.get(
  "/report/template/:id",
  (req, res, next) => {
    checkAuth(req, res, next);
  },
  (req, res) => {
    queries.report
      .getReportTemplateById(req.params.id)
      .then((template) => res.json(template));
  }
);

router.post(
  "/report/template",
  (req, res, next) => {
    checkAuth(req, res, next);
  },
  (req, res) => {
    queries.report
      .createReportTemplate(req.body)
      .then((result) => res.send(result));
  }
);

//machine
router.post(
  "/machine",
  (req, res, next) => {
    checkAuth(req, res, next);
  },
  (req, res) => {
    queries.machine.createMachine(req.body).then((result) => res.send(result));
  }
);

router.get(
  "/machine",
  (req, res, next) => {
    checkAuth(req, res, next);
  },
  (req, res) => {
    queries.machine.getAllMachine().then((machine) => res.json(machine));
  }
);

router.get(
  "/machinegroup",
  (req, res, next) => {
    checkAuth(req, res, next);
  },
  (req, res) => {
    queries.machine.getAllMachineGroup().then((machine) => res.json(machine));
  }
);

router.get(
  "/machinetype",
  (req, res, next) => {
    checkAuth(req, res, next);
  },
  (req, res) => {
    queries.machine.getAllMachineType().then((machine) => res.json(machine));
  }
);

router.get(
  "/machine/:id",
  (req, res, next) => {
    checkAuth(req, res, next);
  },
  (req, res) => {
    queries.machine
      .getMachineById(req.params.id)
      .then((machine) => res.json(machine));
  }
);

router.get(
  "/machine/:id/howtoplay",
  (req, res, next) => {
    checkAuth(req, res, next);
  },
  (req, res) => {
    queries.machine
      .getMachineHowToPlay(req.params.id)
      .then((howto) => res.json(howto));
  }
);

router.put(
  "/machine",
  (req, res, next) => {
    checkAuth(req, res, next);
  },
  (req, res) => {
    queries.machine.editMachine(req.body).then((result) => res.sendStatus(200));
  }
);

router.put(
  "/machinedelete",
  (req, res, next) => {
    checkAuth(req, res, next);
  },
  (req, res) => {
    queries.machine
      .deleteMachine(req.body)
      .then((result) => res.sendStatus(200));
  }
);

//exercise
router.get(
  "/exercise/:id",
  (req, res, next) => {
    checkAuth(req, res, next);
  },
  (req, res) => {
    queries.exercise
      .getExerciseByUserId(req.params.id)
      .then((exercise) => res.json(exercise));
  }
);

router.post(
  "/exercise",
  (req, res, next) => {
    checkAuth(req, res, next);
  },
  (req, res) => {
    queries.exercise
      .createExercise(req.body)
      .then((result) => res.send(result));
  }
);

//membertype
router.get("/membertype", (req, res) => {
  queries.member.getMemberType().then((membertype) => res.json(membertype));
});

// Upload
router.post(
  "/upload/:id",
  (req, res, next) => {
    checkAuth(req, res, next);
  },
  upload.single("file" /* name attribute of <file> element in your form */),
  (req, res) => {
    const tempPath = req.file.path;

    const targetPath = `${req.file.path}.png`;
    const slip = {
      profile_id: req.params.id,
      receipt_path: targetPath,
    };

    if (
      path.extname(req.file.originalname).toLowerCase() === ".png" ||
      path.extname(req.file.originalname).toLowerCase() === ".jpg" ||
      path.extname(req.file.originalname).toLowerCase() === ".jpeg"
    ) {
      fs.rename(tempPath, targetPath, (err) => {
        if (err) {
          return handleError(err, res);
        }

        queries.payment.uploadSlip(slip).then((result) => res.send(result));
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

//me
router.get("/me", (req, res) => {
  const headers = {
    Authorization: req.headers.authorization,
  };
  axios
    .get("https://gatewayservice.sit.kmutt.ac.th/api/me", { headers: headers })
    .then((data) => {
      res.json(data.data);
    })
    .catch((err) => {
      console.log("me error => " + err);
    });
});

module.exports = router;
