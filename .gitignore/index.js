const Discord = require("discord.js");
const config = require('./config.json');
const { send } = require("process");

const Client = new Discord.Client;

Client.once('ready', () => {
	console.log('Ça marche !');
});


const rdé = [];

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
};

Client.on('message', message => {

    if (!message.content.startsWith(config.prefix) || message.author.bot) return;

    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if (command === "dé") {
      let [ndé, vdé] = args;
      message.delete();
      if (vdé != null) {
            for (var i = 0; i < ndé; i++){
             rdé[i]=getRandomInt(vdé)+1;
            };
         const exampleEmbed = new Discord.MessageEmbed()
         .setColor('#ff5283')
         .setDescription(ndé + " dés à " + vdé + " faces :\n**" + rdé.join("** - **") + "**");
         message.channel.send(exampleEmbed);
        
         var removedItems = rdé.splice(1,ndé);
        }
     else {
            let a = getRandomInt(ndé)+1
           const exampleEmbed2 = new Discord.MessageEmbed()
           .setColor('#ff5283')
           .setDescription("Un dé à " + ndé + " faces :\n**" + a +"**");
           message.channel.send(exampleEmbed2);
        }
    }

});

Client.login(config.token)
