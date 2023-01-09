const client = require('../modal/dbConnect');


client.connect();
const getTodo = async (req, res) => {
    await client.query(`SELECT * FROM todo`, (err, result) => {
        if (!err) {
            console.log(result.rows);
            res.json(result.rows);
        }
        // client.end();
    })
}

const postTodo = async (req, res) => {
    const { id, task, status } = req.body;
    await client.query(
        "INSERT INTO todo( id, task, status) VALUES ($1, $2, $3)",
        [id, task, status]);

    res.status(201).send({
        message: "todo added successfully!",
        body: {
            product: { id, task, status }
        },
    });
}

const deleteById = async (req, res) => {
    const id = parseInt(req.params.id);
    await client.query('DELETE FROM todo WHERE id = $1', [id]);

    res.status(200).send({ message: 'task deleted successfully!', id });
};

const getById =  (req, res) => {
    const { id } = req.params;
    client.query('SELECT * FROM todo WHERE id = $1', [id], (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result.rows);
        }
    });
};

const updateById = async (req, res) => {
    const id = parseInt(req.params.id);
    const { task, status } = req.body;

    await client.query(
        "UPDATE todo SET id = $1, task = $2, status = $3 WHERE id = $4",
        [id, task, status, id]);

    res.status(200).send({ message: "Todo Updated Successfully!" });
}

module.exports = {getTodo, postTodo, deleteById, getById, updateById}