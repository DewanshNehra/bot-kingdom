require("dotenv").config();//Loading .env
const fs = require("fs");
const { Collection, Client } = require("discord.js");

const client = new Client();//Making a discord bot client
client.commands = new Collection();//Making client.commands as a Discord.js Collection
client.queue = new Map()

client.config = {
  prefix: process.env.PREFIX
}

//Loading Events
fs.readdir(__dirname + "/events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach((file) => {
    const event = require(__dirname + `/events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
    console.log("Loading Event: "+eventName)
  });
});

//Loading Commands
fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach((file) => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    client.commands.set(commandName, props);
    console.log("Loading Command: "+commandName)
  });
});

//Logging in to discord
client.login(process.env.TOKEN)

//morning wish 
client.on('message', function(message){
  if (message.author.bot) return;
  if(message.content.toLowerCase().includes("good morning")){
    message.reply('Morning Good :)) Have a Nice Day ').catch(err => console.log(err));
  }
  
});
//afternoon wish
client.on('message', function(message){
  if (message.author.bot) return;
  if(message.content.toLowerCase().includes("good afternoon")){
    message.reply('Afternoon Good :)) Have a Nice Afternoon ').catch(err => console.log(err));
  }
  
});
//evening wish
client.on('message', function(message){
  if (message.author.bot) return;
  if(message.content.toLowerCase().includes("good evening")){
    message.reply('Evening Good :)) Have a Nice Evening ').catch(err => console.log(err));
  }
  
});

client.on('message', function(message){
  if (message.author.bot) return;
  if(message.content.toLowerCase().includes("good night")){
    message.reply('Night Good :)) Sweet Dreams ').catch(err => console.log(err));
  }
  
});

//morning wish 
let now = new Date();
let milsecTill4 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 4, 0, 0, 0) - now;
if (milsecTill4 < 0) {
     milsecTill4 += 86400000;
}
setTimeout(function(){
  var yourchannel = client.channels.cache.get('711468609846771716');
  yourchannel.send('Good morning Guys');
}, milsecTill4);

//afternoon wish
let now1 = new Date();
let milsecTill6 = new Date(now1.getFullYear(), now1.getMonth(), now1.getDate(), 6, 30, 0, 0) - now1;
if (milsecTill6 < 0) {
     milsecTill6 += 86400000;
}
setTimeout(function(){
  var yourchannel = client.channels.cache.get('711468609846771716');
  yourchannel.send('Good Afternoon Guys');
}, milsecTill6);

//evening wish
let now3 = new Date();
let milsecTill12 = new Date(now3.getFullYear(), now3.getMonth(), now3.getDate(), 12, 30, 0, 0) - now3;
if (milsecTill12 < 0) {
     milsecTill12 += 86400000;
}
setTimeout(function(){
  var yourchannel = client.channels.cache.get('711468609846771716');
  yourchannel.send('Good Evening Guys');
}, milsecTill12);

//night wish
let now2 = new Date();
let milsecTill16 = new Date(now2.getFullYear(), now2.getMonth(), now2.getDate(), 16, 0, 0, 0) - now2;
if (milsecTill16 < 0) {
     milsecTill16 += 86400000;
}
setTimeout(function(){
  var yourchannel = client.channels.cache.get('711468609846771716');
  yourchannel.send('Good Night Guys');
}, milsecTill16);


//song command 
client.on('message', function(message){
  if (message.author.bot) return;
  var yourchannel = client.channels.cache.get('711470574437924886');
  if(message.content.toLowerCase().includes("-p never gonna give u up")){
    yourchannel.send('^move <@234395307759108106> olleh').catch(err => console.log(err));
  }
  
});

client.on('message', function(message){
  if (message.author.bot) return;
  var yourchannel = client.channels.cache.get('711470574437924886');
  if(message.content.toLowerCase().includes("!p never gonna give u up")){
    yourchannel.send('^move <@235088799074484224> olleh').catch(err => console.log(err));
  }
  
});
const Prefix = '^';
client.on('message', function(message) {
  if (message.content.toLocaleLowerCase().startsWith(Prefix + 'move')) {
    let args = message.content.slice(Prefix.length).split(/ +/)
    cmd = args.shift();
    let member = message.mentions.members.first();
    console.log(member);
    console.log(args);
    console.log(args[1]);
    let newChannel = message.guild.channels.cache.find(chan => chan.name.toLowerCase() === args[1].toLowerCase() && chan.type === 'voice');
    member.voice.setChannel(newChannel)
      .then(() => console.log(`I moved: ${member.displayName} to channel: ${newChannel}!`))
      .catch(console.error);
  }
});