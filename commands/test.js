const { MessageEmbed } = require('discord.js')
const Discord = require('discord.js')

module.exports = {
    name: 'ping',
    aliases: [],
    category: "info",
    description: 'See the lastency of the bot',
    usage: 'ping',
    run : async (client, message, args) => {
      let embed = new Discord.MessageEmbed()
.setDescription(`**${client.ws.ping}ms** Latency!`)
    await message.channel.send({ embeds: [embed] })

    }
}