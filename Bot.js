const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});
client.on('message', message => {
 
 if(message.content === 'say') {
// makes the bot say something and delete the message. As an example, it's open to anyone to use. 
// To get the "message" itself we join the `args` back into a string with spaces: 
const sayMessage = args.join(" ");
// Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
message.delete().catch(O_o=>{}); 
// And we get the bot to say the thing: 
message.channel.send(sayMessage);
  }
 
client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find(ch => ch.name === 'member-log');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Welcome to the server, ${member}`);
});
 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
