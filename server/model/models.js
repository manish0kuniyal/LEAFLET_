const mongoose=require('mongoose')

const Leaflet=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
  msg:{
        type:String,
        required:true
    },
})
const model=mongoose.model('leaflet', Leaflet)
module.exports=model