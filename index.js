const express = require('express')
const cors = require('cors')
const User = require('./model/user')
const ToDo = require('./model/todo')

require('./conn')


const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send('hii from backend')
})
app.get('/about', (req, res) => {
    res.send('hii from about')
})
app.get('/getalltodo', async (req, res) => {
    let todos = await ToDo.find({})
    res.send(todos)
})

app.delete('/deletetodo/:id', async(req, res) => {
await ToDo.findByIdAndDelete(req.params.id)

.then(()=>res.send({success:true}))
})

app.post('/addtodo', async (req, res) => {
    const data = ToDo({
        val: req.body.val
    })
    const result = await data.save()
})

app.put('/updatetodo/:id',async (req,res)=>{
   await ToDo.findByIdAndUpdate(req.params.id,{val:req.body.val})

   .then(()=>res.send({success:true}))
})

app.post('/login', async (req, res) => {
    let existing = await User.findOne({ email: req.body.email })
    console.log( req.body)
    console.log(existing)
    if (existing && existing.pass == req.body.pass) {
        res.send({ message: 'login successfully', user: existing })
    } else {
        res.send({ message: 'user not found' })
    }



})


app.post('/register', async (req, res) => {
    
    const data = User({
        name: req.body.name,
        age: req.body.age,
        email: req.body.email,
        pass: req.body.pass,
    })

    let result = await data.save()
    console.log(result)
if(result){
    res.send('user registered successfully ok')

}else{
    res.send('user not successfully')

}
})
app.listen(8000, () => {
    console.log('hello app is running on port 8000')
})