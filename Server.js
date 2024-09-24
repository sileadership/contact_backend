const express = require('express')
const app = express()
const port = 3000
const cors  = require('cors')
const connectToMongo = require('./db')
const Contact = require('./models/message')
const bodyParser = require('body-parser')

app.use(cors())
app.use(express.json())
app.use(bodyParser.json());

connectToMongo()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;

    try {
        const newContact = new Contact({
            name,
            email,
            message,
        });
        await newContact.save();
        res.status(201).json({ message: 'Message sent successfully' });
        console.log(newContact);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
});

app.get('/api/contacts', async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.json(contacts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
});


app.listen(port, () => {
  console.log(`Backend running on port http://localhost:${port}`)
})


