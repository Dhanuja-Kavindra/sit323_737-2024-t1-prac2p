const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8085;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log('Server started at http://localhost:' + port);
});
