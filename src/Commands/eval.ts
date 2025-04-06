import { CommandType, IBaseCommand } from '@tryforge/forgescript';

const Command: IBaseCommand<CommandType> = {
  type: "messageCreate",
  name: "e",
  code: `
$onlyIf[$authorID==876801702051856424;]
$eval[$message]
`,
};

export default Command;