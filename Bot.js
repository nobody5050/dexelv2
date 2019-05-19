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
  } else
  if (message.content.startsWith(prefix + "foo")) {
    message.channel.send("bar!");
  }
  if (message.content.startsWith(prefix + "mk")) {
  client.users.get("477907717273681952").send("[message1, line 1], [message 1 line 2]");
    message.channel.send("message sent.");
  }
});
bot.on('message', async message => {
    if (Message.channel.type === 'dm'){ 
        console.log(message.content);
        if(message.content === "something"){
            return await message.channel.send("Hi!");
        }
        return;
    }
  });

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
