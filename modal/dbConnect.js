const { Client } = require('pg');

const client = new Client({
    user: "postgres",
    host: "localhost",
    port: 5432,
    password: "Shobha14",
    database: "dbname"
})

client.on("connect", () => {
    console.log("Database Connection Established...")
})

module.exports = client;
