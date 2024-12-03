import knex from "knex";
//npm i knex mysql2
const db = knex({
    client: 'mysql2',
    connection: {
        host: '127.0.0.1',
        port: 3306,
        user: 'root',
        password: '',
        database: 'esbdb'
    },
    pool: { min: 0, max: 7 }
});
export default db;