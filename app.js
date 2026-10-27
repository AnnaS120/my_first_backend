//   const fruit = fruits.find((fruit) => fruit.name.toLowerCase() == name )

//     if (fruit == undefined){
//         res.status(404).send('The fruit does not exist.')
//     } else {
//        res.status(200).send(fruit)
//     }




const express = require('express')
const cors = require('cors')
const app = express()
const fruits = require('./routes/fruitsRoutes')

app.use(cors())
app.use(express.json())

app.use('/fruits', fruits)

app.get('/', (req, res) => {
  res.send('Hello fruity!')
})

module.exports = app