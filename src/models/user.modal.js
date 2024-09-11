 import mongoose,{Schema} from "mongoose";
 import jwt from "jsonwebtoken"
 import bcrypt from "bcryptjs";

 const userSchema = new Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        index:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true
    },
    fullname:{
        type:String,
        required:true,
        trim:true,
        index:true
    },
    avatar:{
        type:String, //cloudnary url
        required:true,
    },
    coverImage:{
        type:String,

    },
    watchHistory:[
        {
            type: Schema.Types.ObjectId,
            ref: 'Video',
        }
    ],
    password:{
        type:String,
        required:[true,'Password is reqired']
    },
    refreshToken:{
        type:String,

    },

 },{timestamps:true});

 userSchema.pre("save",async function(next){
    if(!this.isModified("password")) return next();
    
    this.password = bcrypt.hash(this.password,10)
    next();
 })

 userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password , this.password)
 }

 userSchema.methods.generaeAcressToken =function(){
   return jwt.sign(
        {
            _id:this._id,
            email:this.email,
            username:this.username,
            fullname:this.fullname
        },
        process.env.ACESS_TOKEN_SECRET,
        {
            expiresIn:process.env.ACESS_TOKEN_EXPIRY
        }
    )
 }
 userSchema.methods.generaeRefreshToken = function(){
    return jwt.sign(
        {
            _id:this._id,
            email:this.email,
            username:this.username,
            fullname:this.fullname
        },
        process.env.ACESS_TOKEN_SECRET,
        {
            expiresIn:process.env.ACESS_TOKEN_EXPIRY
        }
    )
 }


 export const User = mongoose.model('User', userSchema);