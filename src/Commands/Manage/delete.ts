import { CommandType, IBaseCommand } from '@tryforge/forgescript';

/**
 * Command configuration for handling the "delete" interaction.
 * Listens for an interaction with a custom ID of "delete" and performs actions.
 */
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