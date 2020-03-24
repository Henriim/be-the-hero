
exports.up = function(knex) {

    //Metodo UP é responsável por criar a tabela
    return knex.schema.createTable('ongs',function(table){
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.string('city').notNullable();
        table.string('uf',2).notNullable();
  });
};

exports.down = function(knex) {
  // caso der problema utiliza-se o metodo DOWN
  return knex.schema.dropTable('ongs');
};
