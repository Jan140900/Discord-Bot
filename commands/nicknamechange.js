const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {



    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You don't have the permission for that.");

    var changenameUser = message.guild.member(message.mentions.users.first() || message.guild.member(args[0]));

    if (!changenameUser) return message.channel.send("user was not found");


    var nickname = args.join(" ").slice(22);
 
   
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You don't have the permission for that.");

    if (!nickname) return message.channel.send("<prefix>nicknamechange (user) (New nickname)");
    
    message.guild.members.get(changenameUser.id).setNickname(nickname);

    var nicknameEmbed =  new discord.RichEmbed()
      .setDescription("nick name successful changed")
      .setColor("#29e53f")
      .setThumbnail(message.guild.iconURL)
      .addField("nickname successful changed to:", nickname)
      .addField("More commands", "Do <prefix>help for more commands")
      .setTimestamp()
      .setFooter('Mady by jan0de0man', message.guild.iconURL);


    message.channel.send(nicknameEmbed);
    var nicknameEmbed1 =  new discord.RichEmbed()
      .setDescription("nick name successful changed")
      .setColor("#29e53f")
      .setThumbnail(message.guild.iconURL)
      .addField(changenameUser + " nickname successful changed to:", nickname)
      .setTimestamp()
      .setFooter('Mady by jan0de0man', message.guild.iconURL);

    let nicknamechannel = message.guild.channels.find(x => x.name === "logs");
    if (!nicknamechannel) return console.log("Kan het logs kanaal niet vinden.");
    nicknamechannel.send(nicknameEmbed1);
}

module.exports.help = {
    name: "nicknamechange",
    description: "for change the nickname af a player"
}