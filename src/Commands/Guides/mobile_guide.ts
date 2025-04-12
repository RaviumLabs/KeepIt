import { CommandType, IBaseCommand } from '@tryforge/forgescript';
import configuration from '@/configuration.json'

const Command: IBaseCommand<CommandType> = {
  type: "interactionCreate",
  code: `
$onlyIf[$customID==mobile_guide;]

$attachment[assets/guide/Message.png;message.png]
$attachment[assets/guide/Hold.png;hold.png]

$interactionReply[
    $ephemeral

    $title[How to Use KeepIt]
    $description[KeepIt helps you **save, categorize, and manage Discord messages** — all in your DMs. Here's how to get started.]
    $color[${configuration.colors.main}]

    $addField[Step 1: Find a message;Search for the message you want to save. Make sure it exists.]
    $image[attachment://message.png]
    $color[${configuration.colors.main}]

    $addField[Step 2: Hold the message;Once you found the message you would like to bookmark, hold it and through the **Apps** section, press **Bookmark with KeepIt**.;;1]
    $image[attachment://hold.png;1]
    $color[${configuration.colors.main};1]
]`,
};

export default Command;