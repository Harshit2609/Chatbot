var restify = require('restify');
var botbuilder = require ('botbuilder');

var server = restify.createServer();
server.listen(4444, function(){
    console.log("listening on port 4444");
});

var connector = new botbuilder.ChatConnector();

var bot = new botbuilder.UniversalBot(connector);

server.post('/', connector.listen());

bot.dialog('/',function(session){
           var clientmessage=session.message.text;
           if(clientmessage=="hi"){
    session.send("Hi,how are you?");
}else if
         (clientmessage=="how are you?"){
    session.send("I'm good");
         }else{
             session.send("I don't understand");  //RETRIEVAL BASED MODEL
         }
           });
