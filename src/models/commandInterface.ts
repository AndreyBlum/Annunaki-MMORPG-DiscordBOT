/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prettier/prettier */
import { Message } from 'discord.js'

export default interface Command {
  /**
   * List of aliases for the command.
   * The first name in the list is the primary command name.
   */
  readonly commandNames: string | string[]

  /** Usage documentation. */
  help(commandPrefix: string): string

  /** Execute the command. */
  run(parsedUserCommand: Message, ...args: any[]): Promise<void>
  
}
