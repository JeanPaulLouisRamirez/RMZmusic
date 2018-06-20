const express = require('express');
const app = express();
app.use(express.static('RMZ'));
app.listen(3021, ()=>console.log('example app listening on port 3021'));
