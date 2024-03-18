const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public')); // Serve static files from the "public" directory

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.use('/public', express.static(__dirname + '/public'));

// Corrected from app.listen(port, () => { to app.listen(PORT, () => {
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.use('/public', express.static(__dirname + '/public'));
