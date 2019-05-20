module.exports = {
	name: 'foo',
	description: 'Ping!',
	execute(message, args) {
		message.channel.send('bar!');
	},
};
