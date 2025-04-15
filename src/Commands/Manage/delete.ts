import { CommandType, IBaseCommand } from '@tryforge/forgescript';

/**
 * Represents a command for handling the deletion of a bookmark interaction.
 * 
 * This command listens for an interaction with a custom ID of "delete" and performs the following actions:
 * 1. Checks if the custom ID matches "delete".
 * 2. Sends an ephemeral interaction reply with a button indicating that the bookmark was deleted.
 * 3. Deletes the message associated with the interaction from the channel.
 * 
 * @type {IBaseCommand<CommandType>} The type of the command object.
 * 
 * @property {string} type - The type of event this command listens to, which is "interactionCreate".
 * @property {string} code - The code executed when the interaction is triggered.
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