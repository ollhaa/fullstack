const express = require('express')
const app = express()

app.use(express.json())

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

app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  persons = persons.filter(p => p.id !== id)
  //console.log(persons)

  response.status(204).end()
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
  //console.log(request)
  //console.log(body)
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

  //console.log("tt")

  const person = {
    name: body.name,
    number: body.number,
    id: generateId(),
  }

  persons = persons.concat(person)

  response.json(person)
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