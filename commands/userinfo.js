const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
    var Icon = message.guild.iconURL;
    
    
    
    var serverEmbed =  new discord.RichEmbed()
      .setDescription("Userinfo")
      .setColor("#29e53f")
      .setThumbnail(Icon)
      .addField("Bot name", bot.user.username)
      .addField("you are joined on", message.member.joinedAt)
      .addField('Roles:', member.roles.map(r => `${r}`).join(' | '), true)
      .setTimestamp()
      .setFooter('Mady by jan0de0man', message.guild.iconURL);


    return message.channel.send(serverEmbed);
}

module.exports.help = {
    name: "userinfo",
    description: "for test the bot"
}