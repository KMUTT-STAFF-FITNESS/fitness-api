const { returning, where } = require("./knex");
const knex = require("./knex");

module.exports = {
  member: {
    getMemberType: function () {
      return knex("membertype");
    },
  },
  users: {
    getAll: function () {
      return knex("profile")
        .join(
          "membertype",
          "profile.member_type_id",
          "=",
          "membertype.member_type_id"
        )
        .where("profile.role_id", 3)
        .orderBy("profile.profile_id");
    },
    getPendingUsers: function () {
      return knex("profile")
        .join(
          "membertype",
          "profile.member_type_id",
          "=",
          "membertype.member_type_id"
        )
        .join("payment", "profile.profile_id", "=", "payment.profile_id")
        .where("profile.is_member", false);
    },

    getById: function (id) {
      return knex("profile")
        .join(
          "membertype",
          "profile.member_type_id",
          "=",
          "membertype.member_type_id"
        )
        .where("profile.profile_id", id)
        .first();
    },
    getByUserId: function (user_id) {
      return knex("profile")
        .join(
          "membertype",
          "profile.member_type_id",
          "=",
          "membertype.member_type_id"
        )
        .where("profile.user_id", user_id)
        .first();
    },
    createUser: function (user) {
      return knex("profile").insert(user).returning("*");
    },
    approveUser: function (user) {
      return knex("profile")
        .where(user)
        .update({ is_member: 1 })
        .returning("*");
    },
    deleteUser: function (user) {
      return knex("profile").where(user).del();
    },
    // editUser: function (user) {
    //   return knex("members");
    // },
  },
  nfc: {
    checkIn: function (id) {
      return knex("nfc").insert(id).returning("*");
    },
  },
  report: {
    createReport: function (report) {
      return knex("report_problem").insert(report).returning("*");
    },
    getReport: function () {
      return knex("report_problem")
        .join("machine", "report_problem.machine_id", "=", "machine.machine_id")
        .orderBy("report_problem.report_date", "asc");
    },
    createReportTemplate: function (reportTemp) {
      return knex("report_template").insert(reportTemp).returning("*");
    },
    getReportTemplateById: function (id) {
      return knex("report_template")
        .where("machine_type_id", id)
        .orderBy("problem_temp_id");
    },
  },
  notification: {
    createNoti: function (noti) {
      return knex("notification_news").insert(noti).returning("*");
    },
    getNoti: function () {
      return knex("notification_news").orderBy("create_at", "desc");
    },
    getNotiById: function (id) {
      return knex("notification_news").where("news_id", id).first();
    },
  },
  machine: {
    createMachine: function (machine) {
      return knex("machine").insert(machine).returning("*");
    },
    getAllMachine: function () {
      return knex("machine")
        .join(
          "machine_type",
          "machine.machine_type_id",
          "=",
          "machine_type.machine_type_id"
        )
        .join(
          "machine_group",
          "machine.machine_group_id",
          "=",
          "machine_group.machine_group_id"
        )
        .orderBy("machine_id");
    },
    getMachineById: function (id) {
      return knex("machine")
        .join(
          "machine_type",
          "machine.machine_type_id",
          "=",
          "machine_type.machine_type_id"
        )
        .where("machine_id", id)
        .first();
    },
    getMachineHowToPlay: function (id) {
      return knex("howtoplay").where("machine_group_id", id).first();
    },
    getAllMachineGroup: function () {
      return knex("machine_group").select();
    },
    getAllMachineType: function () {
      return knex("machine_type").select();
    },
    editMachine: function (data) {
      return knex("machine")
        .where({ machine_id: data.machine_id })
        .update(data)
        .returning("*");
    },
    deleteMachine: function (id) {
      return knex("machine")
        .where({ machine_id: id.machine_id })
        .del()
        .returning("*");
    },
  },
  exercise: {
    getExerciseByUserId: function (id) {
      return knex("exercise").where("profile_id", id).orderBy("date", "asc");
    },
    createExercise: function (exercise) {
      return knex("exercise").insert(exercise).returning("*");
    },
  },
  payment: {
    createCashPay: function (payment) {
      return knex("payment").insert(payment).returning("*");
    },
    uploadSlip: function (slip) {
      return knex("payment").insert(slip).returning("*");
    },
  },
};
