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
  client.users.get("478362240882311169").send("Error, line 247, character 10
ai.arrayresponsemessage.sendmessage(); <--- here

Excepted message got undefined.
at:
C:/system/ai/message.js
C:/system/ai/logic.js
C:/system/ai/respond.js
C:/system/system.exe
C:/system/systemJS.dll");
    message.channel.send("message sent.");
  }
});

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
