// ==========================================
// BEGINNER BACKEND PROJECT - SERVER FILE
// ==========================================
// This file creates and runs our backend server

// Step 1: Import Express framework
// Express is a popular Node.js library that makes it easy to create web servers
const express = require('express');

// Step 2: Create an Express application
// This is like creating a "server" object that we'll configure
const app = express();

// Step 3: Set the port number
// Ports are like door numbers - when you want to connect to this server,
// you'll use this number (like localhost:3000)
const PORT = 3000;

// Step 4: Middleware - JSON Parser
// This allows our server to understand JSON data sent from clients
// JSON is a format for sending data (like JavaScript objects)
app.use(express.json());

// ==========================================
// ROUTES - These are the endpoints our server responds to
// ==========================================

// Route 1: GET - Simple Welcome Message
// GET means "retrieve information"
// '/' means the root/home URL (like localhost:3000/)
app.get('/', (req, res) => {
  // req = request (data coming FROM the client/browser)
  // res = response (data we send BACK to the client)
  res.send('Welcome to my first backend server! 🎉');
});

// Route 2: GET - Get All Users
// This endpoint returns a list of users
// Try accessing: http://localhost:3000/users
app.get('/users', (req, res) => {
  // This is mock data (fake data for learning)
  const users = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 },
    { id: 3, name: 'Charlie', age: 28 }
  ];
  
  // Send the users array as JSON response
  res.json(users);
});

// Route 3: GET - Get One User by ID
// ':id' is a URL parameter - it's like a variable in the URL
// Example: /users/1 will give us user with id=1
app.get('/users/:id', (req, res) => {
  // req.params contains URL parameters
  const userId = parseInt(req.params.id); // Convert string to number
  
  // Mock user data
  const users = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 },
    { id: 3, name: 'Charlie', age: 28 }
  ];
  
  // Find the user with matching ID
  const user = users.find(u => u.id === userId);
  
  if (user) {
    // If user found, send the user data
    res.json(user);
  } else {
    // If user not found, send error message with status code 404 (Not Found)
    res.status(404).json({ message: 'User not found' });
  }
});

// Route 4: POST - Create a New User
// POST means "create new data"
// This endpoint receives data and creates a new user
app.post('/users', (req, res) => {
  // req.body contains the data sent in the request
  // For example: { name: 'David', age: 27 }
  const { name, age } = req.body;
  
  // Basic validation - check if name and age were provided
  if (!name || !age) {
    return res.status(400).json({ 
      message: 'Name and age are required' 
    });
  }
  
  // Create a new user object
  const newUser = {
    id: Date.now(), // Simple ID generation (using current timestamp)
    name: name,
    age: age
  };
  
  // In a real app, we would save this to a database
  // For now, we just send back the created user
  res.status(201).json({
    message: 'User created successfully',
    user: newUser
  });
});

// Route 5: GET - Health Check
// This is a simple endpoint to check if the server is running
app.get('/health', (req, res) => {
  res.json({ 
    status: 'Server is running!',
    timestamp: new Date().toISOString()
  });
});

// ==========================================
// START THE SERVER
// ==========================================
// This tells our server to start listening for requests
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
  console.log(`📝 Try visiting: http://localhost:${PORT}/`);
  console.log(`👥 View users: http://localhost:${PORT}/users`);
  console.log(`💚 Health check: http://localhost:${PORT}/health`);
});

// ==========================================
// WHAT'S HAPPENING HERE?
// ==========================================
// 1. We created an Express app (like a web server)
// 2. We defined routes (URLs that do different things)
// 3. We started the server on port 3000
// 4. Now when someone visits these URLs, they get responses!
