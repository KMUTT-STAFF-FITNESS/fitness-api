
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('notification_news').del()
    .then(function () {
      // Inserts seed entries
      return knex('notification_news').insert([
        {
          news_id: '1',
          message_title: 'ยินดีต้อนรับ',
          content:'ยินดีต้อนรับสมาชิกใหม่เข้าสู่ฟิตเนสของ มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี',
          create_at:'16/09/2563',
          author:'Admin_001'
        }
      ]);
    });
};
