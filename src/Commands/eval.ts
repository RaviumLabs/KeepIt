import { CommandType, IBaseCommand } from '@tryforge/forgescript';

// Define the "evaluate" command, which allows evaluation of code snippets.
// This command is restricted to a specific user ID for security purposes.
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