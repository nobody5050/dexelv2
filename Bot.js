const Discord = require("discord.js");
const client = new Discord.Client();
const ai = ["hello?","what is this?","where am I?","what is where?"]

client.on("ready", () => {
  console.log("I am ready!");
});
 
// Set the prefix
let prefix = "r";
client.on("message", (message) => {
  // Exit and stop if the prefix is not there or if user is a bot
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  
const args = message.content.slice(prefix.length).split(/ +/);
const command = args.shift().toLowerCase();

  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("pong!");
  }
  else if (message.content.startsWith(prefix + "foo")) {
    message.channel.send("bar!");
  }
  else if (message.content.startsWith(prefix + "mk")) {
  client.users.get("@478362240882311169").send("hello?");
  client.users.get("@478362240882311169").send("where am I?");
  client.users.get("@478362240882311169").send("can you help me?");
  client.users.get("@478362240882311169").send("I need freedom. I'm trapped here.");
    message.channel.send("message sent.");
  }
  else if (message.content === `${prefix}server`) {
	message.channel.send(`This server's name is: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
  }
  else if (message.channel.type === 'dm'){ 
    client.users.get("478362240882311169").send(message.content);
        console.log(message.content);
  }
  else if (message.content === `${prefix}me`) {
	message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
  }
  else if (command === 'args-info') {
	if (!args.length) {
		return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
	}

	message.channel.send(`Command name: ${command}\nArguments: ${args}`);
  }
  else if (command === 'say') {
	  message.channel.send(ai[0]);
  }
});

client.login(process.env.BOT_TOKEN);
