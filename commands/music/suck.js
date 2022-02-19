module.exports = {
    name: 'suck',
    aliases: ['s'],
    utilisation: '{prefix}suck',
    voiceChannel: true,

    async execute(client, message) {
        message.channel.send('MATEJ GRGIĆ SUCKS KURAC🗑️');
    },
};