const notes = require("express").Router()
const { readFromFile, readAndAppend } = require("../helpers/fsUtils")
const uuid = require("../helpers/uuid")

// GET Route for retrieving all the feedback
notes.get('/', (req, res) =>
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
)

// POST Route for submitting feedback
notes.post('/', (req, res) => {
  // Destructuring assignment for the items in req.body
    const { title, text } = req.body

  // If all the required properties are present
    if (title && text) {
    // Variable for the object we will save
        const newNote = {
            id: uuid(),
            title,
            text
        }

    readAndAppend(newNote, './db/db.json')

    const response = {
        status: 'success',
        body: newNote,
    }

        res.json(response)
    } else {
        res.json('Error in posting notes')
    }
})

module.exports = notes
