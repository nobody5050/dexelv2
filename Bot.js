const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
 
client.on("message", (message) => {
  if (!message.content.startsWith(config.prefix) || message.author.bot) return;
 
  if (message.content.startsWith(config.prefix + "ping")) {
    message.channel.send("pong!");
  } else
  if (message.content.startsWith(config.prefix + "foo")) {
    message.channel.send("bar!");
  }
});

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
