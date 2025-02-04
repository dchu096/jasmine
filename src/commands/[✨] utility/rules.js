const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "rules",
  description: "Rules to use Jasmine",
  category: "[✨] utility",
  run: async (client, message) => {
    const embed = new EmbedBuilder()
      .setAuthor({
        name: message.author.username,
        iconURL: message.author.displayAvatarURL(),
      })
      .setTitle("Jasmine Rules")
      .setColor("#CD1C6C")
      .setThumbnail(client.user.avatarURL())
      .setDescription(
        `By using Jasmine, you agree to these rules. If you break any rules, we reserve the right to blacklist you from Jasmine. Use \`${client.prefixes.get(
          message.guild.id
        )}report\` to report a user that you found is breaking these rules.`
      )
      .addFields([
        {
          name: "**1️⃣ Userbots, spamming, and macros**",
          value:
            "------ Userbotting, macros, scripts and anything else used to automate running commands and helping you to solve any puzzles in any games commands are strictly forbidden. On top of this, massive amounts of spam is not allowed and will be punished with the same severity.",
        },
        {
          name: "**2️⃣ Sharing exploits**",
          value:
            "------ Sharing exploits/bugs with other users is forbidden. Please report all bugs to staff on Jasmine's Support Server (Jasmine Jolly Joyhouse) so we can fix it as soon as possible.",
        },
        {
          name: "**3️⃣ Coins storage account/farming account**",
          value:
            '------ Using "alt" accounts to farm or store coins is forbidden.',
        },
        {
          name: "**4️⃣ Scam, sales, trading**",
          value:
            "------ Using bot currency (or any of the bot's features) to scam, trade for, or sell anything is forbidden.",
        },
        {
          name: "**5️⃣ Discord TOS and guidelines**",
          value:
            "------ The Discord TOS and Discord Community Guidelines also are enforcable through our bot.",
        },
      ])
      .setTimestamp();

    message.reply({ embeds: [embed] });
  },
  interaction: {
    data: {
      name: "rules",
      type: 1,
      description: "Rules to use Jasmine",
    },
    run: async (client, interaction) => {
      const embed = new EmbedBuilder()
        .setAuthor({
          name: interaction.user.username,
          iconURL: interaction.user.displayAvatarURL(),
        })
        .setTitle("Jasmine Rules")
        .setColor("#CD1C6C")
        .setThumbnail(client.user.avatarURL())
        .setDescription(
          `By using Jasmine, you agree to these rules. If you break any rules, we reserve the right to blacklist you from Jasmine. Please join our support server for any inquiry. (Jasmine's Jolly Joyhouse).`
        )
        .addFields([
          {
            name: "**1️⃣ Userbots, spamming, and macros**",
            value:
              "------ Userbotting, macros, scripts and anything else used to automate running commands and helping you to solve any puzzles in any games commands are strictly forbidden. On top of this, massive amounts of spam is not allowed and will be punished with the same severity.",
          },
          {
            name: "**2️⃣ Sharing exploits**",
            value:
              "------ Sharing exploits/bugs with other users is forbidden. Please report all bugs to staff on Jasmine's Support Server (Jasmine Jolly Joyhouse) so we can fix it as soon as possible.",
          },
          {
            name: "**3️⃣ Coins storage account/farming account**",
            value:
              '------ Using "alt" accounts to farm or store coins is forbidden.',
          },
          {
            name: "**4️⃣ Scam, sales, trading**",
            value:
              "------ Using bot currency (or any of the bot's features) to scam, trade for, or sell anything is forbidden.",
          },
          {
            name: "**5️⃣ Discord TOS and guidelines**",
            value:
              "------ The Discord TOS and Discord Community Guidelines also are enforcable through our bot.",
          },
        ])
        .setTimestamp();

      interaction.reply({ embeds: [embed] });
    },
  },
};
