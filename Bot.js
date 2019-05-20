const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("I am ready!");
});
 
// Set the prefix
let prefix = "r";
client.on("message", (message) => {
  // Exit and stop if the prefix is not there or if user is a bot
  if (!message.content.startsWith(prefix) || message.author.bot) return;
 
  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("pong!");
  }
  else if (message.content.startsWith(prefix + "foo")) {
    message.channel.send("bar!");
  }
  else if (message.content.startsWith(prefix + "mk")) {
  client.users.get("298020941173096450").send("My bot is better than koteks!");
    message.channel.send("message sent.");
  }
  else if (message.content === `${prefix}server`) {
	message.channel.send(`This server's name is: ${message.guild.name}`);
  }
  else if (message.channel.type === 'dm'){ 
    client.users.get("298020941173096450").send(message.content);
        console.log(message.content);
    }
});

client.login(process.env.BOT_TOKEN);

