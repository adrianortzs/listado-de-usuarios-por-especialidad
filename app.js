const usersData = [ 
    { id: 1, name: 'Alice', age: 28, specialty: 'marketing' },
    { id: 2, name: 'Bob', age: 35, specialty: 'developers' },
    { id: 3, name: 'Charlie', age: 30, specialty: 'developers' },
    { id: 4, name: 'David', age: 25, specialty: 'QAs' },
    { id: 5, name: 'Emma', age: 32, specialty: 'ventas' },
    { id: 6, name: 'Frank', age: 28, specialty: 'marketing' },
    { id: 7, name: 'Grace', age: 34, specialty: 'developers' },
    { id: 8, name: 'Hank', age: 27, specialty: 'QAs' },
    { id: 9, name: 'Ivy', age: 31, specialty: 'ventas' },
    { id: 10, name: 'Jack', age: 29, specialty: 'marketing' },
    { id: 11, name: 'Karen', age: 36, specialty: 'developers' },
    { id: 12, name: 'Leo', age: 26, specialty: 'QAs' },
    { id: 13, name: 'Mia', age: 33, specialty: 'ventas' },
    { id: 14, name: 'Nathan', age: 30, specialty: 'marketing' },
    { id: 15, name: 'Olivia', age: 37, specialty: 'developers' },
    { id: 16, name: 'Paul', age: 24, specialty: 'QAs' },
    { id: 17, name: 'Quinn', age: 32, specialty: 'ventas' },
    { id: 18, name: 'Ryan', age: 28, specialty: 'marketing' },
    { id: 19, name: 'Sara', age: 35, specialty: 'developers' },
    { id: 20, name: 'Tom', age: 29, specialty: 'QAs' },
    { id: 21, name: 'Uma', age: 30, specialty: 'ventas' },
    { id: 22, name: 'Victor', age: 27, specialty: 'marketing' },
    { id: 23, name: 'Wendy', age: 34, specialty: 'developers' },
    { id: 24, name: 'Xander', age: 31, specialty: 'QAs' },
    { id: 25, name: 'Yara', age: 33, specialty: 'ventas' },
    { id: 26, name: 'Zack', age: 28, specialty: 'marketing' },
    { id: 27, name: 'Ava', age: 36, specialty: 'developers' },
    { id: 28, name: 'Bryan', age: 26, specialty: 'QAs' },
    { id: 29, name: 'Cynthia', age: 32, specialty: 'ventas' },
    { id: 30, name: 'Derek', age: 30, specialty: 'marketing' } ];

const express = require("express")
const app = express()
    
app.get("/", (req,res) => {
    res.send(`<h1>ESPECIALIDADES</h1>
    <ul>
      <li><a href="/marketing">Marketing</a></li>
      <li><a href="/developers">Developers</a></li>
      <li><a href="/qas">QAs</a></li>
      <li><a href="/ventas">Ventas</a></li>
    </ul>`)
})

app.get("/:specialty", (req,res) => {
    const especialidad = req.params.specialty.toLowerCase()
    const personasFiltradas = filtrarEspecialidad(especialidad, usersData)

    if (personasFiltradas.length === 0) {
        res.status(404).send('404 - Especialidad no encontrada')
    }

    let listaPersonas = ""
    personasFiltradas.forEach(persona => {
        listaPersonas += `<li>Nombre: ${persona.name}</li><li>Edad: ${persona.age}</li>`
    })

    res.send(`<h1>${especialidad.toUpperCase()}</h1>
    <p>Número de personas: ${personasFiltradas.length}</p>
    <ul>${listaPersonas}</ul>
    <a href="/">Volver atrás</a>`)
})

app.use((req, res) => {
    res.status(404).send('404 - Página no encontrada')
})
    
function filtrarEspecialidad(specialty, usersData) {
    return usersData.filter(persona => persona.specialty.toLowerCase() === specialty)
}

// node app.js
const port = 3000
app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`)
})
