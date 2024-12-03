import fnKnex from 'knex';

const db = fnKnex({
    client: 'mysql2',
    connection:
        {
            host: '127.0.0.1',
            port: 3306,
            user: 'root',
            password: '',
            database: 'esb'
        },
    pool: {min: 0, max: 7}
});

const formatDate = (date) => {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = ('0' + (d.getMonth() + 1)).slice(-2);
    const day
        = ('0' + d.getDate()).slice(-2);
    return `${year}-${month}-${day}`
};
const generateRandomString = (length = 4) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let randomString = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomString += characters[randomIndex];
    }
    return randomString;
}
export default db;
export {formatDate};
export {generateRandomString}