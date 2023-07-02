const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.static('Markers')); 

// Enable CORS for all routes
app.use(cors());

// Handling GET request
app.get('/', (req, res) => {
    res.send('A simple Node App is running on thi');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
