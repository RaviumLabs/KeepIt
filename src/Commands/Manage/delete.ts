import { CommandType, IBaseCommand } from '@tryforge/forgescript';

const Command: IBaseCommand<CommandType> = {
  type: "interactionCreate",
  code: `
$onlyIf[$customID==delete;]
$interactionReply[
    $ephemeral
    $addActionRow
    $addButton[_;Bookmark deleted!;Danger;🗑️;true]
]
$!deleteMessage[$channelID;$messageID]`,
};

export default Command;