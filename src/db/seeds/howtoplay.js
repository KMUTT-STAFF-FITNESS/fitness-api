exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("howtoplay")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("howtoplay").insert([
        {
          howtoplay_id: 1,
          machine_group_id: "1",
          detail: "template",
          video_path: "www.google.com",
        },
      ]);
    });
};
