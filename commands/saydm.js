const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
    var user124 = message.guild.member(message.mentions.users.first() || message.guild.member(args[0]));
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You don't have the permission for that.");
    var reason = args.join(" ");
    console.log(reason);
    //if (!reason) return message.channel.send("give a text");
    message.channel.bulkDelete(1);
    message.user124.send(reason);

}

module.exports.help = {
    name: "dm",
    description: "for say someting in a dm"
}