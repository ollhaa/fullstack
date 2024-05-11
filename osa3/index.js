const express = require('express')
const app = express()

let notes = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456"
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523"
  },
  {
    id: 3,
    name: "Dan Abraow",
    number: "12-43-234345"
  },
  {
    id: 4,
    name: "Mary Poppoendick",
    number: "39-23-6423122"
  }
]

//app.get('/', (request, response) => {
//  response.send('<h1>Hello World!</h1>')
//})

app.get('/api/persons', (request, response) => {
  response.json(notes)
})


app.get('/api/info', (request, response) => {
    let people =  notes.length
    time = new Date()
    //console.log("time")

    let rawtext = `Phonebook has info for ${people} people. ${time}`
    response.json(rawtext)
  })

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})