exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("report_problem")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("report_problem").insert([
        {
          machine_id: "1",
          report_message: "เครื่องวิ่งทำงานไม่คงที่ สายพานชำรุด",
        },
      ]);
    });
};
