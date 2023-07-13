const express=require('express')
const fetch=require('node-fetch')
const cors=require('cors')
const mongoose=require('mongoose')
const dotenv=require('dotenv')
const Leaflet=require('./model/models')
const app=express()

dotenv.config()
app.use(cors())
app.use(express.json())

mongoose.connect(process.env.URL,{
  useNewUrlParser:true
}).then(()=>console.log('connected to db...'))
.catch((err)=>console.log(err))


app.get('/',(req,res)=>{
    res.send("--------")
    console.log("main")
})

app.get('/plant',async(req,res)=>{
  const response = await fetch('https://perenual.com/api/species-list?key=sk-qDg164ad474dca7d51525&poisonous=1');
    const json = await response.json();
    const data=json.data
    res.send(data)
}
)

app.get('/edible',async(req,res)=>{
  const response = await fetch('https://perenual.com/api/species-list?key=sk-qDg164ad474dca7d51525&edible=1');
    const json = await response.json();
    const data=json.data
    res.send(data)
}
)
app.get('/indoor',async(req,res)=>{
  const response = await fetch('https://perenual.com/api/species-list?key=sk-qDg164ad474dca7d51525&indoor=1');
    const json = await response.json();
    const data=json.data
    res.send(data)
}
)
app.get('/plant/:name',async(req,res)=>{

  const response = await fetch(`https://trefle.io/api/v1/plants/search?token=fm2KzkGw3Nu6f37JWIT66aD0YIucNl6DvFJr2izVBaY&q=${req.params.name}`);
  const json = await response.json();
  const data=json.data
  res.send(data)
})
app.post('/user',async(req,res)=>{
  try{
      const NewUser= await Leaflet.create(req.body)
      res.send(req.body)
  }
  catch(err){
    console.log(err)
  }
})

app.get('/getuser',async(req,res)=>{
  try{
    const user = await Leaflet.find()
    res.send(user)
  }
  catch(err){
    console.log(err)
  }
})

app.listen(5000,console.log("...on 5000"))

