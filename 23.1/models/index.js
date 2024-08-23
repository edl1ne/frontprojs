// index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const Todo = require('./models/Todo');
const mongoDbURL = "mongodb+srv://dostordev:<db_password>@cluster0.j08t3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost/todo-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));

// Routes
app.get('/api/todos', async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

app.post('/api/todos', async (req, res) => {
  const { title } = req.body;
  const newTodo = new Todo({ title });
  await newTodo.save();
  res.json(newTodo);
});

app.put('/api/todos/:id', async (req, res) => {
  const { id } = req.params;
  const { title, completed } = req.body;
  const updatedTodo = await Todo.findByIdAndUpdate(
    id,
    { title, completed },
    { new: true }
  );
  res.json(updatedTodo);
});

app.delete('/api/todos/:id', async (req, res) => {
  const { id } = req.params;
  await Todo.findByIdAndDelete(id);
  res.json({ message: 'Todo deleted' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
