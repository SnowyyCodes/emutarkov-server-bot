

const Discord = require('discord.js');
const client = new Discord.Client();

client.login("INSERT TOKEN HERE")

client.on("ready", () => {
    console.log("ready nerd");
    client.user.setActivity("Helping Nerds About 12.9 since 1999");
})

client.on('message', message => {
    if (message.content.includes("12.9")){
        if (!message.author.bot)
        message.reply("12.9 aint out yet nerd")
    }

})