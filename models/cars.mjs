import mongoose from 'mongoose';

const carSchema = new mongoose.Schema({
   name: {
    type: String,
    required: true
},
   make: {
    type: String,
    required: true
   },
   readyToDrive: Boolean 
});

const Car = mongoose.model('Car', carSchema);

export default Car;