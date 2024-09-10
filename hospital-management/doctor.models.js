import mongoose from "mongoose";
const doctorRecordSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    salary:{
        type:Number,
        required:true
    },
    qualification:{
        type:String,
        required:true
    },
    expirienceInYears:{
        type:Number,
        default:0
    },
    worksInHospital:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Hospital" 
    }
},{timestamps:true});

export const DoctorRecord = mongoose.model('DoctorRecord',doctorRecordSchema);