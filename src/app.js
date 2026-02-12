const express = require('express');
const prisma = require('./config/prisma');

const app = express();



app.get('/', (req,res) => {
    res.send("Server is running 🚀")
})

app.use(express.json())

//create task

app.post('/tasks', async (req, res) => {
    const {title} = req.body

    const task = await prisma.task.create({
        data: {
            title
        }
    })
    res.json(task)
})

//GET ALL
app.get('/tasks', async (req, res) => {
    const tasks = await prisma.task.findMany()
    res.json(tasks)
})


module.exports = app

