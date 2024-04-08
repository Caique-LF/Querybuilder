const express = require('express');
const knex = require('./conexao');

const app = express();

app.use(express.json());

app.get('/', async (req, res)=>{
    // const agenda = await knex('agenda').where('id', 5).debug();
    // const agenda = await knex('agenda').where('id',"!=", 5).debug();
    // const agenda = await knex('agenda').where({id:5}).debug();
    //const agenda = await knex('agenda').where({id:5}).first().debug();
    // const agenda = await knex('agenda').where({id:5}).limit(1).debug();


    

    res.json(agenda)
})

app.listen(3000)