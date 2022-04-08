// imports
const express = require('express');
const app = express();
const port = 3000;


app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use('/img', express.static(__dirname + 'public/img'));


app.get('', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})


// lsiten on port 3000
app.listen(port, () => console.info(`Listening on port ${port}`))