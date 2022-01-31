import mongoose, { Schema } from 'mongoose';

const OrderSchema = new mongoose.Schema({
    customer : {
        type : String,
        required : true,
        maxlength : 50,

    },
    address : {
        type : String,
        required : true,
    },
    total : {
        type : Number,
        required : true
    },
    status : {
        type : Number,
        default : 0
    },
     method : {
         type : Number,
         required : true
     }
})