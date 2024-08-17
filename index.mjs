//  Imports  
import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import db from './db/conn.mjs';
import jsxViewEngine from 'jsx-view-engine';
import methodOverride from 'method-override';
import carRoutes from './controllers/car.mjs';



dotenv.config();
const app = express();
const PORT = process.env.PORT || 5050;


//  = my view engine  == 
app.set('view engine', 'jsx');
app.set ('views', './views');
app.engine('jsx', jsxViewEngine());

// middlleware   
// when using form
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));

// app.use(express.json());

// routes
app.use('/cars', carRoutes);
app.get('/', (req, res) => {
    res.send(
        `<div> this is my cars and brands root route <br/><a href='/cars'>cars</a></div>`
    )
})

//  = Start my server  ==
app.listen(PORT, () => {
    console.log('server is listening');
})
