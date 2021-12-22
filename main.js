const prefix = "!";

const {Client, Intents, Message} = require ('discord.js');

const client = new Client({
    intents: [Intents.FLAGS.GUILDS,
              Intents.FLAGS.GUILD_MESSAGES]
});


client.once('ready', () =>{
    console.log('DEVREALISTABOT is online');
});

client.on('messageCreate', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === "learn"){
        message.channel.send('Siga o @devrealista no instagram!!!');
    }
});

client.login('OTIzMjUxMjQyMDg2NTg0MzYx.YcNSuQ._UexnhFdfU7pr19X6EFGeOI6W1g');