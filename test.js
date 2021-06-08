const discord = require("discord.js");

module.exports.run = (client, message) => {

message.channel.send("Test komut.")
  
};

module.exports.help = { name: "test"}
module.exports.conf = { aliases: [], permLevel: 0 };