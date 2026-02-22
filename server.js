require('dotenv').config();

const express = require('express');;

const app = express();
const port = process.env.PORT;
app.use(express.json());

app.get('/', (req, res) => {
  res.send('My Week 2 API');
});

app.post('/accept', (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) return res.status(400).json({ error: 'Name and email are required' });
        //returns a 400 Bad Request status code if name or email is missing
    res.status(201).json({ message: `Hello, ${name}! Your email ${email} has been received.`});    
      //returns a 201 Created status code with a personalized message if name and email are provided  
});      

app.use((req, res, next) => {
    //logs every request to the console
  console.log(`${req.method} ${req.url}`);
  next();//passes control to the next handler
})

app.get('/user/:id', (req, res) => {
  const id = req.params.id;
  console.log(id);
  res.send(`User ${id} profile`);
});

app.listen(port, () => {
  console.log(`API is running on http://localhost:${port}`);
});