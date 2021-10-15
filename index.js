
const { Client, Collection } = require("discord.js");

const client = new Client({
    intents: 32767,
});
module.exports = client;
const MessageAttachment = require('discord.js')
const { Discord   } = require('discord.js');
const canvas = require("discord-canvas");
const welcomeCanvas = new canvas.Welcome();
// Global Variables
client.commands = new Collection();
client.slashCommands = new Collection();
client.config = require("./config.json");

require("./handler")(client);

client.login(process.env.Token);