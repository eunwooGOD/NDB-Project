const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 3002 // Your desired backend port

app.use(bodyParser.json())

app.post('/api/join', (req, res) => {
  const { name, email, pass } = req.body
  // Process the data, e.g., save to a database
  console.log('Received data:', { name, email, pass })
  res.json({ message: 'Data received successfully!' })
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
