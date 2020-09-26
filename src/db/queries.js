const { returning } = require("./knex");
const knex = require("./knex");

module.exports = {
  users: {
    getAll: function () {
      return knex("profile")
        .join("members", "profile.member_id", "=", "members.member_id")
        .join(
          "membertype",
          "profile.member_type_id",
          "=",
          "membertype.member_type_id"
        )
        .orderBy("profile.member_id");
    },
    getById: function (id) {
      return knex("profile")
        .join("members", "profile.member_id", "=", "members.member_id")
        .join(
          "membertype",
          "profile.member_type_id",
          "=",
          "membertype.member_type_id"
        )
        .where("profile.member_id", id)
        .first();
    },
    createUser: function (user) {
      return knex("profile").insert(user).returning("*");
    },
    // editUser: function (user) {
    //   return knex("members");
    // },
  },
  nfc: {
    checkIn: function(id) {
      return knex("nfc").insert(id).returning("*");
    }
  },
  report: {
    createReport: function(report){
      return knex("report_problem").insert(report).returning("*");
    },
    getReport: function(){
      return knex("report_problem").orderBy("report_date", "desc");
    },
    createReportTemplate: function(reportTemp){
      return knex("report_template").insert(reportTemp).returning("*");
    },
    getReportTemplateById: function(id){
      return knex("report_template").where("machine_type_id", id).orderBy("problem_temp_id");
    }
  },
  notification: {
    createNoti: function(noti){
      return knex("notification_news").insert(noti).returning("*");
    },
    getNoti: function(){
      return knex("notification_news").orderBy("create_at", "desc");
    }
  },
  machine: {
    createMachine: function(machine){
      return knex("machine").insert(machine).returning("*");
    },
    getAllMachine: function(){
      return knex("machine").orderBy("machine_id");
    },
    getMachineById: function(id){
      return knex("machine").where("machine_id", id).first();
    }
  }
};
