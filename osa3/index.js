const express = require('express')
const app = express()

let persons = [
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
  response.json(persons)
})

app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  const person = persons.find(p => p.id === id)

  if (person) {
    response.json(person)
  } else {
    response.status(404).end()
  }
})


app.get('/api/info', (request, response) => {
    let people =  persons.length
    time = new Date()
    //console.log("time")

    let rawtext = `Phonebook has info for ${people} people. ${time}`
    response.json(rawtext)
  })

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})