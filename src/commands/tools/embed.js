const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("embed")
        .setDescription('Returns an embed.'),
    async execute(interaction, client){
        const embed = new EmbedBuilder()
            .setTitle(`This is an EMBED.`)
            .setDescription(`The person who coded this bot dresses like a dad.`)
            .setColor(0x18e1ee)
            .setImage(client.user.displayAvatarURL())
            .setThumbnail(client.user.displayAvatarURL())
            .setTimestamp(Date.now())
            .setAuthor({
                url:`https://instagram.com/saielhaqs`,
                iconURL: interaction.user.displayAvatarURL(),
                name: interaction.user.tag
            })
            .setFooter({
                iconURL: client.user.displayAvatarURL(),
                text: `Footer text`
            })
            .setURL(`https://instagram.com/saielhaqs`)
            .addFields([
                {
                    name:`Field 1 name`,
                    value:`Field 1 value`,
                    inline: true
                },
                {
                    name:`Field 2 name`,
                    value:`Field 2 value`,
                    inline: false
                },
                {
                    name:`Field 3 name`,
                    value:`Field 3 value`,
                    inline: false
                },
            ]);
            await interaction.reply({
                embeds: [embed]
            });
    }
}