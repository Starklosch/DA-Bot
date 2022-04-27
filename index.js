require('dotenv').config();

const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.DIRECT_MESSAGE_REACTIONS] });

client.login(process.env.CLIENT_TOKEN)

client.on("ready", () => {
    console.log("I'm here!")
})

client.on("message", async msg => {
    if (msg.content.match(/ping/i)){
        msg.reply("Pong!");
    }
})