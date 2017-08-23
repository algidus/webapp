var app = require("express")();
var httpserver = require("http").createServer(app);
var io = require("socket.io")(httpserver);

var ip = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var port = process.env.OPENSHIFT_NODEJS_PORT || 8080;

app.get('/', function (req, res){
  res.writeHead(200, {"Content-Type": "text/plain"});
  res.end("Welcome to groupchat server!\n");
});

httpserver.listen(port, ip, function(){
  res.end("Server is listening!");
});

io.on("connection", function (socket){
    socket.on("CHAT MESSAGE", function(msg){
        io.emit("CHAT MESSAGE", msg);
    });
});



