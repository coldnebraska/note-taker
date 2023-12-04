const express = require("express")
const noteData = require("./db/db.json")

const PORT = 3001

const app = express()

// path to index.html
app.use(express.static("public"))
app.get("/", (req, res) => res.sendFile(path.join(__dirname, 'index.html')))

// path to notes.html
app.get("/notes", (req, res) => res.json(noteData))

app.listen(PORT, () => console.log(`App listening at http://localhost:${PORT}`))