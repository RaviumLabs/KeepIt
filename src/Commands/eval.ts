import { CommandType, IBaseCommand } from '@tryforge/forgescript';

const Command: IBaseCommand<CommandType> = {
  type: "messageCreate",
  name: "ev",
  code: `
$onlyIf[$authorID==876801702051856424;]
$eval[$message]
`,
};

export default Command;