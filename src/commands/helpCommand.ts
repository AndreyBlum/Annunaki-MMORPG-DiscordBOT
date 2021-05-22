/* eslint-disable prettier/prettier */
import Command from '../models/commandInterface'
import { Message, MessageEmbed } from 'discord.js'

export class HelpCommand implements Command {
  commandNames = 'help'

  help(commandPrefix: string): string {
    return `Try ${commandPrefix}help.`
  }

  async run(message: Message, commandsNames: string[]): Promise<void> {
    const embed = new MessageEmbed()
      .setColor('#4B0082')
      .setAuthor('Anunnaki', 'https://i.imgur.com/CvHFB93.png')
      .setThumbnail('https://i.imgur.com/CvHFB93.png')
      .addField('How to start?', 'First you need to type **a!start** to start your adventure!')
      .addField('List of commands\n', '- ' + commandsNames.join('\n- '))
    await message.channel.send(embed)
  }
}
