const Discord = require('discord.js');

const client = new Discord.Client({intents:["GUILDS","GUILD_MESSAGES"]});

client.once("ready", () =>{
    console.log("Gully online")
});

//last line in file
//ask for the client key
client.login('');