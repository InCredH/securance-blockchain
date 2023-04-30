const dbURL = 'mongodb+srv://AyushB:Jupiter@cluster0.fp2si7o.mongodb.net/test?retryWrites=true&w=majority'
const express = require('express');
const mongoose = require('mongoose');
const claimRoutes = require('./routes/claimRoutes.js');
const policyRoutes = require('./routes/policyRoutes.js');
const cors = require('cors');
// const claimControllers = 

const app = express();

// Connect to MongoDB
mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Middleware
app.use(express.json());

app.use(cors());

// Routes
app.use(claimRoutes);
app.use(policyRoutes);

// Start server
app.listen(8080, () => {
  console.log('Server started on port 3000');
});



