/*
This file will have db related configs
*/

module.exports = {
    development: {
        HOST: 'localhost',
        USER: 'root',
        PASSWORD: 'SoumiHazra1234@',
        DB: "ecom_db",
        dialect: 'mysql',
        pool: {
            max: 5, //maximum connection possible is 5
            min: 0,
            aquire: 3000,
            aquire: 1000
        }
    },
    production: {
        HOST: 'sql11.freemysqlhosting.net',
        USER: 'sql11509035',
        PASSWORD: '8t4yIZt9MQ',
        DB: "sql11509035",
        dialect: 'mysql',
        pool: {
            max: 5, //maximum connection possible is 5
            min: 0,
            aquire: 3000,
            aquire: 1000
        }
    }
}