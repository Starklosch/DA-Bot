const ds = require("discord.js")
const client = new ds.Client()
 
client.on("ready", console.log("I'm here!"))

client.on("message", async msg => {
    if (msg.content.match(/ping/i)){
        msg.reply("Pong!");
    }
})