import mongoose from 'mongoose'
import {Schema} from 'mongoose'

const adminSchema= new Schema({
    name:{
        type:String,
        required:true
    },
    employeeNumber:{
        type:Number,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    contact:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true
    }

})

module.exports = mongoose.models.Admin || mongoose.model('Admin',adminSchema) //check if 'User' model is already defined, if not, then it explicitly defines it