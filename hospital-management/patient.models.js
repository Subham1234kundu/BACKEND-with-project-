import mongoose from "mongoose";
const patientRecordSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    diagonsedWit:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
        required:true,
    },
    bloodGroup:{
        type:String,
        required:true,
    },
    gender:{
        type:String,
        enum:["M","F","O"],
        required:true,
    },
    admitedIn:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Hospital"
    }
},{timestamps:true});

export const PatientRecord = mongoose.model('PatientRecord',patientRecordSchema);