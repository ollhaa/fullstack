require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const Person = require('./models/person')
//const person = require('./models/person')


const app = express()

app.use(express.json())
app.use(morgan('combined'))
app.use(cors())
app.use(express.static('dist'))

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

app.get('/api/persons', (request, response) => {
  Person.find({}).then(persons => {
    response.json(persons)
  })
})

//app.get('/api/persons/:id', (request, response) => {
//  Person.findById(request.params.id).then(person => {
//    response.json(person)
//  })
//})

app.delete('/api/persons/:id', (request, response, next) => {
  Person.findByIdAndDelete(request.params.id)
    .then(result => {
      response.status(204).end()
    })
    .catch(error => next(error))
})

const generateId = () => {
  const newId = Math.floor(Math.random() * 10000 +1)
  return newId
}

const nameChecker = (name) => {
  if (persons.find(object => object.name === name)) {
    return true
  }

  return false

}

app.post('/api/persons', (request, response) => {
  const body = request.body
  if (!body.name) {
    return response.status(400).json({ 
      error: 'name missing' 
    })
  } else if (!body.number) {
    return response.status(400).json({ 
      error: 'number missing' 
    })
  } else if(nameChecker(body.name)) {
    return response.status(400).json({ 
      error: 'name is already added!' 
    })
  }


  const person = new Person({
    name: body.name,
    number: body.number,
    id: generateId(),
  })

  person.save().then(savedPerson => {
    response.json(savedPerson)
  })
})


app.get('/api/info', (request, response) => {
    let people =  persons.length
    time = new Date()
    //console.log("time")

    let rawtext = `Phonebook has info for ${people} people. ${time}`
    response.json(rawtext)
  })

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})