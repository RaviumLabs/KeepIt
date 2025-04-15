import { CommandType, IBaseCommand } from '@tryforge/forgescript';

/**
 * Command configuration for handling the "delete" interaction.
 * Listens for an interaction with a custom ID of "delete" and performs actions.
 */
const Delete: IBaseCommand<CommandType> = {
  type: "interactionCreate",
  code: `
    $c[Check if the custom ID matches "delete"]
    $onlyIf[$customID==delete;]

    $c[Send an ephemeral interaction reply with a button indicating the bookmark was deleted]
    $interactionReply[
      $ephemeral
      $addActionRow
      $addButton[_;Bookmark deleted!;Danger;🗑️;true]
    ]

    $c[Delete the message from the channel]
    $!deleteMessage[$channelID;$messageID]
  `,
};

export default Delete;