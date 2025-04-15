import { CommandType, IBaseCommand } from '@tryforge/forgescript';

/**
 * Represents a command configuration for evaluating code snippets.
 * 
 * @type {IBaseCommand<CommandType>}
 * @property {string} type - The type of event that triggers the command, in this case, "messageCreate".
 * @property {string} name - The name of the command, "evaluate".
 * @property {string[]} aliases - Alternative names for the command, including "eval" and "ev".
 * @property {string} code - The logic executed when the command is triggered. 
 *   - Restricts usage to a specific user ID (`$onlyIf[$authorID==876801702051856424;]`).
 *   - Evaluates the provided message content as code (`$eval[$message]`).
*/
const Command: IBaseCommand<CommandType> = {
  type: "messageCreate",
  name: "evaluate",
  aliases: ['eval', 'ev'],
  code: `
    $onlyIf[$authorID==876801702051856424;]
    $eval[$message]
  `,
};

export default Command;