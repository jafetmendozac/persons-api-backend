const express = require('express')
const app = express()
const morgan = require('morgan')
const requestLogger = require('./loggerMiddleware')
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(requestLogger)

morgan.token('body', req => JSON.stringify(req.body))
app.use(
  morgan(':method :url :status :res[content-length] - :response-time ms :body'))

  
let persons = [
  { id: 1,
    name: 'Arto Hellas', 
    number: '040-123456' 
  },
  { 
    id: 2,
    name: 'Ada Lovelace', 
    number: '39-44-5323523' 
  },
  { 
    id: 3,
    name: 'Dan Abramov', 
    number: '12-43-234345' 
  },
  { 
    id: 4,
    name: 'Mary Poppendieck', 
    number: '39-23-6423122' 
  }
]


app.get('/info', (request, response) => {

  const date = new Date().toString()
  response.send(
    `<p>Phonebook has info for ${persons.length} people</p>
     <p>${ date }</p>`
  )
})

app.get('/api/persons', (request, response) => {
  response.json( persons )
})

app.get('/api/persons/:id', (request, response) => {
  const id = Number( request.params.id );
  const person = persons.find( person => person.id === id ) 

  if ( person ) {
    response.json( person )
  } else {
    response.status(404).end()
  }
})

app.delete('/api/persons/:id', (request, response) => {

  const id = Number( request.params.id );
  persons = persons.filter( person => person.id !== id );
  console.log(persons);
  response.status(204).end() 
})

app.post('/api/persons', (request, response) => {
  const id = Math.round(Math.random() * 10000000000)
  const person = request.body

  const diferent = people.find( dperson => dperson.name === person.name)

  if(person.name.length === 0 || person.number.length === 0) {
    return response.status(411).json({error: 'Name not found or number not found'})
  } else if( diferent ) {
    return response.status(409).json({error: 'name must be unique'})
  }
  const newPerson = {
    id: id,
    name: person.name,
    number: person.number
  }
  persons = [ ...persons, newPerson ]
  response.status(201).send(newPerson)
})


const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})