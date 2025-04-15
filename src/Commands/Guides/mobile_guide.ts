import { CommandType, IBaseCommand } from '@tryforge/forgescript';
import configuration from '@/configuration.json';

// Define the command object
/**
 * Represents the `mobile_guide` command for the KeepIt application.
 * This command is triggered by an interaction with a custom ID of `mobile_guide`.
 * It provides a step-by-step guide on how to use KeepIt to save, categorize, 
 * and manage Discord messages directly in the user's DMs.
 *
 * ### Features:
 * - Ensures the interaction is specifically for the `mobile_guide` custom ID.
 * - Attaches guide images (`Message.png` and `Hold.png`) to visually assist users.
 * - Sends an ephemeral interaction reply with a detailed guide on using KeepIt.
 *
 * ### Guide Steps:
 * 1. **Find a message**: Locate the message you want to save.
 * 2. **Hold the message**: Use the **Apps** section to bookmark the message with KeepIt.
 *
 * @constant
 * @type {IBaseCommand<CommandType>}
 * @property {string} type - The type of the command, set to `interactionCreate`.
 * @property {string} code - The code executed when the command is triggered.
*/
const ModbileGuide: IBaseCommand<CommandType> = {
  type: 'interactionCreate',
  code: `
    $c[Ensure the interaction is for the 'mobile_guide' custom ID]
    $onlyIf[$customID==mobile_guide;]

    $attachment[assets/guide/Message.png;message.png] $c[Attach the 'Message' guide image]
    $attachment[assets/guide/Hold.png;hold.png] $c[Attach the 'Hold' guide image]

    $interactionReply[
      $ephemeral

      $title[How to Use KeepIt]
      $description[KeepIt helps you **save, categorize, and manage Discord messages** — all in your DMs. Here's how to get started.]
      $color[${configuration.colors.main}]

      $addField[Step 1: Find a message;Search for the message you want to save. Make sure it exists.]
      $image[attachment://message.png]

      $addField[Step 2: Hold the message;Once you found the message you would like to bookmark, hold it and through the **Apps** section, press **Bookmark with KeepIt**.;;1]
      $image[attachment://hold.png;1]
      $color[${configuration.colors.main};1]
    ]
  `,
};

export default ModbileGuide;