exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("machine_type")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("machine_type").insert([
        {
          machine_type_id: "1",
          machine_type_name: "เผาผลาญแคลอรี่",
        },
        {
          machine_type_id: "2",
          machine_type_name: "เสริมกล้ามเนื้อ",
        },
        {
          machine_type_id: "3",
          machine_type_name: "คลายกล้ามเนื้อ",
        }
      ]);
    });
};
