var ex = require('express');
var app = ex();
const mongoose = require ('mongoose')
const port = 8000;
const data=require('./model');
const bodyParser= require ('body-parser');
const cors = require ('cors')
app.use(cors())
//body parser is used to parse the body of coming data in json format
app.use(bodyParser.json())

//for connecting the database
mongoose.connect('mongodb://127.0.0.1:27017/Fit', {
    useNewUrlParser: true
})
//for checking the connection
mongoose.connection.once("open", () => {
    console.log("Database connected successfully")
})

//creating api for data
app.post("/create", (req, res)=>{
    const d=data(req.body);
    console.log(req.body)
    d.save()
    .then ((e)=>{
        res.send(e)
    }).catch((err)=>console.log("API failed"))
})

//getting an object from the api
app.get("/show", async (req, res) => {
    await data.find()
    .then ((r)=>{
        res.send(r)
    }).catch((err)=>console.log(err))
})

//deleting an object from the api
app.delete("/delete/:id", (req, res) => {
    const id = req.params.id;
    data.findByIdAndRemove({ _id: id }, (err) => {
        if (err) {
            console.log("Error occured while deleting");
        }
        else {
            res.send(console.log("Deleted successfully"))
        }
    })
})

//updating some data from the api
// app.put("/update/:id", (req, res) => {
//     const id = req.params.id;
//     data.updateOne({ _id: id }, {
//         $set: req.body,
//     }, (err) => {
//         if (err) {
//             console.log("Error occured while updating")
//         }
//         else {
//             res.send(console.log("Uodated Successfully"));
//         }
//     })
// })


app.listen(port, () => {
    console.log('Port is connected')
})