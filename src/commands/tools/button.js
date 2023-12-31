const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("button")
        .setDescription('return a button'),
    async execute(interaction, client){
        const button = new ButtonBuilder()
            .setCustomId('youtube')
            .setLabel(`Click here!`)
            .setStyle(ButtonStyle.Primary);
        await interaction.reply({
            components: [new ActionRowBuilder().addComponents(button)]
        });
    }
}