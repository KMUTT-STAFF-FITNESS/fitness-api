exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("report_template")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("report_template").insert([
        { problem_temp_id: 1, machine_type_id: "1", message: "เปิดไม่ติด" },
        { problem_temp_id: 2, machine_type_id: "1", message: "สายพานมีปัญหา" },
      ]);
    });
};
