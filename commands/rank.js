const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_SERVER")) return message.reply("You do not have access to this command");
    let Userroll = message.guild.member(message.mentions.users.first() || message.guild.member(arguments[0]));
    if(!Userroll) return message.reply("Couldn't find that user!");
    let roleName = args.join(" ").slice(22);
    if(!roleName) return message.channel.send("<prefix>rank (Name) (roll)");

    let Grole = member.guild.channels.find("name", roleName);
    if(!Grole) return message.reply("Couldn't find that role.");

    Userroll.addRole(roleName);

    //Filtering the guild members only keeping those with the role
    //Then mapping the filtered array to their usernames
    // let membersWithRole = message.guild.members.filter(member => { 
    //     return member.roles.find("name", roleName);
    // }).map(member => {
    //     return member.user.username;
    // })

    let rolembed = new discord.RichEmbed()
        .setTitle(`**${Userroll} heeft succesvol de rol ${roleName}**`)
        //.setDescription(`Users with the ${roleName} role`)
        .setColor(0xFFFF)
        .setTimestamp()
        .setFooter('Mady by jan0de0man', message.guild.iconURL);


    message.channel.send(rolembed);
    return
}

module.exports.help = {
    name: "rank",
    description: "for give a rank(only for owner)"
}