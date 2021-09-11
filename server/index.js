const express = require('express');
const app = express();
const path = require('path')

app.use(express.static(path.join(__dirname, '..', 'public')))

app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'client/index.html'))
});

app.get('/api/todos', async (req, res, next) => {
    try{
        const todos = await Todo.findAll()
        res.send(todos);
    } catch(err) {
        console.error(err)
    }
})
const Sequelize = require('sequelize')
const { STRING } = Sequelize.DataTypes
const db = new Sequelize('postgres://localhost/practice_friday_db', {
    logging: false
});

const Todo = db.define('todos', {
    taskName: {
        type: STRING
    }
})

const syncAndSeed = async () => {
    await db.sync({ force: true })
    await Todo.create({taskName: "Eat Breakfast"})
}

const PORT = 3000

const init = async () => {
    await syncAndSeed()
    app.listen(PORT, ()=> {
        console.log('listening on', PORT);
    });
}

init()