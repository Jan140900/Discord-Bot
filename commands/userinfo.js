const discord = require("discord.js");
//const moment = require('moment');

module.exports.run = async(bot, message, args) => {
    let user;
    if (message.mentions.users.first()) {
        user = message.mentions.users.first();
    } else {
        user = message.author;
    }
    
    const member = message.guild.member(user);
    
    const embed = new discord.RichEmbed()
        .setColor("RANDOM")
        .setThumbnail(message.author.avatarURL)
        .addField(`${user.tag}`, `${user}`, true)
        .addField("ID:", `${user.id}`, true)
        .addField("Nickname:", `${member.nickname !== null ? `${member.nickname}` : 'None'}`, true)
        .addField("Status:", `${user.presence.status}`, true)
        .addField("In Server", message.guild.name, true)
        .addField("Game:", `${user.presence.game ? user.presence.game.name : 'None'}`, true)
        .addField("Bot:", `${user.bot}`, true)
        .addField("Joined The Server On:", user.joinedAt)
        .addField("Account Created On:", user.createdAt) 
        .addField("Roles:", member.roles.map(roles => `${roles}`).join(', '), true)
        .setFooter(`Replying to ${message.author.username}#${message.author.discriminator}`)
    message.channel.send({embed});
}

module.exports.help = {
    name: "userinfo",
    description: "userinfo"
}