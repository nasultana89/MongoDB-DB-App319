import express from 'express';
const router = express.Router();
import Car from '../models/car.mjs';
import db from '../db/conn.mjs';

// index get list of elements
router.get('/', async (req, res) => {
    try {
        const foundCars = await Car.find({});
        res.status(200).render('cars/Index', { cars: foundCars })
        // res.status(200).send(foundCars);

    } catch (e) {
        res.status(400).send(e);
    }
})

// N - New      GET         CREATE - (a) this is a view that allows user input
router.get('/new', (req, res) => {
    res.render('cars/New');

})


// D - Delete   DELETE      DELETE
router.delete('/:id', async (req, res) => {
    try {
        const deletedCar = await Car.findByIdAndDelete(req.params.id);
        console.log(deletedCar);
        res.status(200).redirect('/cars');
        // ***** if this were a true api, this would respond with json *****
        // res.status(200).json(deletedCar);
    } catch (e) {
        res.status(400).send(e);
    }
})

// U - Update   PUT/PATCH    this updates our database
router.put('/:id', async (req, res) => {

    if (req.body.readyToDrive === 'on') {
        req.body.readyToDrive = true;
    } else {
        req.body.readyToDrive = false;
    }
    // console.log(req.body);

    try {
        const updatedCar = await Car.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true },
        );
        console.log(updatedCar);
        res.redirect(`/cars/${req.params.id}`);
        // ***** if this were a true api, this would respond with json *****
        // res.status(200).json(updatedCars);
    } catch (e) {
        res.status(400).send(e);
    }
})



// C - Create   POST        CREATE - (a) 
router.post('/', async (req, res) => {
    // check checkbox value is a boolean
    if (req.body.readyToDrive === 'on') {
        req.body.readyToDrive = true;
    } else {
        req.body.readyToDrive = false;
    }
    console.log(req.body);

    try {
        const createdCar = await Car.create(req.body);

        // res.send(createdCar);
        res.status(200).redirect('/cars');


    } catch (e) {
        res.status(400).send(e);
    }
})

// E - Edit           
router.get("/:id/edit", async (req, res) => {
    try {
        const foundCar = await Car.findById(req.params.id);
        res.status(200).render('cars/Edit', { car: foundCar });
    } catch (e) {
        res.status(400).send(e);
    }
})

// S - Show     
router.get('/:id', async (req, res) => {
    try {
        const foundCar = await Car.findById(req.params.id);
        //        
        res.render('cars/Show', { car: foundCar });

    } catch (e) {
        res.status(400).send(e);
    }
})





export default router;