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

router.post(
  "/login",
  passport.authenticate("ldapauth", { session: false }),
  function (req, res) {
    res.send(res);
  }
);

// Upload a file
router.post(
  "/api/files",
  minioMiddleware({ op: expressMinio.Ops.post }),
  (req, res) => {
    if (req.minio.error) {
      res.status(400).json({ error: req.minio.error });
    } else {
      res.send({ filename: req.minio.post.filename });
    }
  }
);

// List all files
router.get(
  "/api/files",
  minioMiddleware({ op: expressMinio.Ops.list }),
  (req, res) => {
    if (req.minio.error) {
      res.status(400).json({ error: req.minio.error });
    } else {
      res.send(req.minio.list);
    }
  }
);

// Download a file
router.get(
  `/api/files/:filename`,
  minioMiddleware({ op: expressMinio.Ops.getStream }),
  (req, res) => {
    if (req.minio.error) {
      res.status(400).json({ error: req.minio.error });
      return;
    }

    res.attachment(req.minio.get.originalName);
    req.minio.get.stream.pipe(res);
  }
);

// Delete a file
router.delete(
  "/api/files/:filename",
  minioMiddleware({ op: expressMinio.Ops.delete }),
  (req, res) => {
    if (req.minio.error) {
      res.status(400).json({ error: req.minio.error });
    } else {
      res.send(req.minio.delete);
    }
  }
);
module.exports = router;
