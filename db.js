const knex = require('knex')({
  client: 'pg',
  connection: {
    user: 'postgres',
    password: 'root',
    database: 'simple-notes',
  },
});

knex.schema.createTable('notes1', (table) => {
  table.increments('id');
  table.string('content');
  table.timestamps();
})
  .then(() => {
    knex('notes').select()
      .then((rows) => {
        console.log(rows);
      });
  });
