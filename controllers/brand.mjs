import express from 'express';
const router = express.Router();
import Brand from '../models/brand.mjs';
import db from '../db/conn.mjs';

// index get list of elements
router.get('/', async (req, res) => {
    try {
        const foundBrands = await Brand.find({});
        res.status(200).render('brands/Index', { brands: foundBrands })
        // res.status(200).send(foundBrands);

    } catch (e) {
        res.status(400).send(e);
    }
})

// N - New      GET         CREATE - (a) this is a view that allows user input
router.get('/new', (req, res) => {
    res.render('brands/New');

})


// D - Delete   DELETE      DELETE
router.delete('/:id', async (req, res) => {
    try {
        const deletedBrand = await Brand.findByIdAndDelete(req.params.id);
        console.log(deletedBrand);
        res.status(200).redirect('/brands');
        // ***** if this were a true api, this would respond with json *****
        // res.status(200).json(deletedBrand);
    } catch (e) {
        res.status(400).send(e);
    }
})

// U - Update   PUT/PATCH    this updates our database
router.put('/:id', async (req, res) => {

    if (req.body.readyForPickup === 'on') {
        req.body.readyForPickup = true;
    } else {
        req.body.readyForPickup = false;
    }
    // console.log(req.body);

    try {
        const updatedBrand = await Brand.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true },
        );
        console.log(updatedBrand);
        res.redirect(`/brands/${req.params.id}`);
        // ***** if this were a true api, this would respond with json *****
        // res.status(200).json(updatedBrands);
    } catch (e) {
        res.status(400).send(e);
    }
})



// C - Create   POST        CREATE - (a) 
router.post('/', async (req, res) => {
    // check checkbox value is a boolean
    if (req.body.readyForPickup === 'on') {
        req.body.readyForPickup = true;
    } else {
        req.body.readyForPickup = false;
    }
    console.log(req.body);

    try {
        const createdBrand = await Brand.create(req.body);

        // res.send(createdBrand);
        res.status(200).redirect('/brands');


    } catch (e) {
        res.status(400).send(e);
    }
})

// E - Edit           
router.get("/:id/edit", async (req, res) => {
    try {
        const foundBrand = await Brand.findById(req.params.id);
        res.status(200).render('brands/Edit', { brand: foundBrand });
    } catch (e) {
        res.status(400).send(e);
    }
})

// S - Show     
router.get('/:id', async (req, res) => {
    try {
        const foundBrand = await Brand.findById(req.params.id);
        //        
        res.render('brands/Show', { brand: foundBrand });

    } catch (e) {
        res.status(400).send(e);
    }
})





export default router;