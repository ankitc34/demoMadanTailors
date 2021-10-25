const path = require('path')
const express = require('express');
const app = express();
const port = '8581';
const hostname = "192.168.43.180";


// built in middle-ware to surf the website
app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.send("Hello World!!");
});

app.listen(port, hostname, () => {
    console.log(`listening to the port ${port}`);
});