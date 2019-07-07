const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NTk3MzM1MjQzMjY3MjQ0MDQy.XSHSOw.8Xf4k08NHDP0OAMZP1mVlADNFsA';

const PREFIX = ':';

bot.on('ready', () => {
    console.log('This bot is active!');
    bot.user.setActivity(' Soggy Nuggets', {
        type: 'WATCHING'
    }).catch(console.error);
})

bot.on('message', message => {

    let args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0]) {
        case 'ping':
            message.channel.send('Pong!');
            break;
        case 'website':
            message.channel.send('www.youtube.com/channel/UCCynBQoOo7q8k0ZhWTjKm4Q?');
            break;
        case 'clear':
            if (!message.member.roles.find(r => r.name === "alpha mods (the soggy fam)")) return message.channel.send('YOU DO NOT HAVE HIGH ENOUGH PERMISSIONS!!!')
                .then(message => message.delete(10000));
            if (!args[1]) return message.reply('Error please define second arg')
            message.channel.bulkDelete(args[1]);
            message.reply('I destroyed the messages with my Soggy Blast!')
                .then(message => message.delete(10000));
            break;
    }
})

bot.login(token);