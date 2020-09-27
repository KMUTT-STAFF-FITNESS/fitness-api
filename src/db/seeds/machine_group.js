exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("machine_group")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("machine_group").insert([
        { machine_group_id: 1, machine_group_name: "เครื่องเดิน - วิ่ง" },
        {
          machine_group_id: 2,
          machine_group_name: "เครื่องบริหารกล้ามเนื้อหลังส่วนล่าง",
        },
        { machine_group_id: 3, machine_group_name: "จักรยานนั่งพิง" },
        { machine_group_id: 4, machine_group_name: "เครื่องเดินวงรี" },
        { machine_group_id: 5, machine_group_name: "เครื่องสั่นสะเทือน" },
        {
          machine_group_id: 6,
          machine_group_name: "เครื่องบริหารต้นขาด้านหน้าและสะโพก",
        },
        { machine_group_id: 7, machine_group_name: "เครื่องบริหารหน้าท้อง" },
        { machine_group_id: 8, machine_group_name: "เครื่องบริหารอกกลาง" },
        {
          machine_group_id: 9,
          machine_group_name: "เครื่องมือบริหารกล้ามเนื้อต้นแขนด้านหน้า",
        },
        { machine_group_id: 10, machine_group_name: "จักรยานนั่งตรง" },
        { machine_group_id: 11, machine_group_name: "ชุดดัมเบล" },
        {
          machine_group_id: 12,
          machine_group_name: "เครื่องยืดเหยียดกล้ามเนื้อ",
        },
        { machine_group_id: 13, machine_group_name: "อุปกรณ์ช่วยฝึกยกน้ำหนัก" },
        { machine_group_id: 14, machine_group_name: "STEPPER" },
        { machine_group_id: 15, machine_group_name: "เครื่องนวด" },
        { machine_group_id: 16, machine_group_name: "บริหารหน้าแขน หลังแขน" },
      ]);
    });
};
