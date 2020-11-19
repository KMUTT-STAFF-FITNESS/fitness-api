module.exports = {
  development: {
    client: "mysql",
    connection: {
      host: "localhost",
      user: "root",
      password: "root",
      database: "ksf",
<<<<<<< HEAD
      port: "8889"
=======
      port:"8889"
>>>>>>> 0322d22639b64aff47299bb54982e6c4648b10cc
      // host:  process.env.HOST_DEV_DB,
      // user: process.env.USER_DEV_DB,
      // password: process.env.PASSWORD_DEV,
      // database: process.env.DATABASE_DEV_DB
    },
    migrations: {
      directory: "./src/db/migrations",
    },
    seeds: {
      directory: "./src/db/seeds",
    },
  },
};
