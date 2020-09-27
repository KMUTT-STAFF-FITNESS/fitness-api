
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('machine').del()
    .then(function () {
      // Inserts seed entries
      return knex('machine').insert([
      {
          machine_id: '1',
          machine_type_id: '1',
          machine_name: 'เครื่องเดิน - วิ่งคอมพิวเตอร์(Treadmill) 1/7'
        },
        {
          machine_id: '2',
          machine_type_id: '1',
          machine_name: 'เครื่องเดิน - วิ่งคอมพิวเตอร์(Treadmill) 2/7'
        },
        {
          machine_id: '3',
          machine_type_id: '1',
          machine_name: 'เครื่องเดิน - วิ่งคอมพิวเตอร์(Treadmill) 3/7'
        },
        {
          machine_id: '4',
          machine_type_id: '1',
          machine_name: 'เครื่องเดิน - วิ่งคอมพิวเตอร์(Treadmill) 4/7'
        },
        {
          machine_id: '5',
          machine_type_id: '1',
          machine_name: 'เครื่องเดิน - วิ่งคอมพิวเตอร์(Treadmill) 5/7'
        },
        {
          machine_id: '6',
          machine_type_id: '1',
          machine_name: 'เครื่องเดิน - วิ่งคอมพิวเตอร์(Treadmill) 6/7'
        },
        {
          machine_id: '7',
          machine_type_id: '1',
          machine_name: 'เครื่องเดิน - วิ่งคอมพิวเตอร์(Treadmill) 7/7'
        },
        {
          machine_id: '8',
          machine_type_id: '2',
          machine_name: 'เครื่องบริหารกล้ามเนื้อหลังส่วนล่าง(Hyper Extension)'
        },
        {
          machine_id: '9',
          machine_type_id: '1',
          machine_name: 'จักรยานนั่งพิง 1/3'
        },
        {
          machine_id: '10',
          machine_type_id: '1',
          machine_name: 'จักรยานนั่งพิง 2/3'
        },
        {
          machine_id: '11',
          machine_type_id: '1',
          machine_name: 'จักรยานนั่งพิง 3/3'
        },
        {
          machine_id: '12',
          machine_type_id: '1',
          machine_name: 'เครื่องเดินวงรี 1/4'
        },
        {
          machine_id: '13',
          machine_type_id: '1',
          machine_name: 'เครื่องเดินวงรี 2/4'
        },
        {
          machine_id: '14',
          machine_type_id: '1',
          machine_name: 'เครื่องเดินวงรี 3/4'
        },
        {
          machine_id: '15',
          machine_type_id: '1',
          machine_name: 'เครื่องเดินวงรี 4/4'
        },
        {
          machine_id: '16',
          machine_type_id: '3',
          machine_name: 'เครื่องสั่นสะเทือน 1/2'
        },
        {
          machine_id: '17',
          machine_type_id: '3',
          machine_name: 'เครื่องสั่นสะเทือน 2/2'
        },
        {
          machine_id: '18',
          machine_type_id: '2',
          machine_name: 'เครื่องบริหารต้นขาด้านหน้าและสะโพก (Leg press)'
        },
        {
          machine_id: '19',
          machine_type_id: '2',
          machine_name: 'เครื่องบริหารหน้าท้อง (Abdominal Machine) 1/2'
        },
        {
          machine_id: '20',
          machine_type_id: '2',
          machine_name: 'เครื่องบริหารหน้าท้อง (Abdominal Machine) 2/2'
        },
        {
          machine_id: '21',
          machine_type_id: '2',
          machine_name: 'เครื่องบริหารอกกลาง (Chest Press)'
        },
        {
          machine_id: '22',
          machine_type_id: '2',
          machine_name: 'เครื่องมือบริหารกล้ามเนื้อต้นแขนด้านหน้า (Arms Curl)'
        },
        {
          machine_id: '23',
          machine_type_id: '1',
          machine_name: 'จักรยานนั่งตรง 1/3'
        },
        {
          machine_id: '24',
          machine_type_id: '1',
          machine_name: 'จักรยานนั่งตรง 2/3'
        },
        {
          machine_id: '25',
          machine_type_id: '1',
          machine_name: 'จักรยานนั่งตรง 3/3'
        },
        {
          machine_id: '26',
          machine_type_id: '2',
          machine_name: 'ชุดดัมเบลโครเมี่ยม 10 กิโลกรัม'
        },
        {
          machine_id: '27',
          machine_type_id: '3',
          machine_name: 'เครื่องยืดเหยียดกล้ามเนื้อ'
        },
        {
          machine_id: '28',
          machine_type_id: '2',
          machine_name: 'เครื่อง Smith Machine (อุปกรณ์ช่วยฝึกยกน้ำหนัก)'
        },
        {
          machine_id: '29',
          machine_type_id: '2',
          machine_name: 'เครื่อง STEPPER'
        },
        {
          machine_id: '30',
          machine_type_id: '3',
          machine_name: 'เครื่องนวด 1/3'
        },
        {
          machine_id: '31',
          machine_type_id: '3',
          machine_name: 'เครื่องนวด 2/3'
        },
        {
          machine_id: '32',
          machine_type_id: '3',
          machine_name: 'เครื่องนวด 3/3'
        },
        {
          machine_id: '33',
          machine_type_id: '2',
          machine_name: 'Crossover Pulley Combo (บริหารหน้าแขน หลังแขน ฯ)'
        },
      ]);
    });
};
