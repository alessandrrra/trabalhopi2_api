const http = require('http');
const app = require('./app');
const server = http.createServer(app);
app.get('/', function (req, res) {
    res.redirect('/views/index.ejs');
});
server.listen(3000);
