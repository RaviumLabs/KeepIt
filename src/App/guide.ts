import { IApplicationCommandData } from '@tryforge/forgescript';
import configuration from '@/configuration.json'

const ApplicationCommand: IApplicationCommandData = {
    data: {
        type: 1,
        name: 'guide',
        description: 'Learn how to use KeepIt — your minimalist message bookmarking bot.',
        dm_permission: true,
        default_member_permissions: null
    },
    code: `
$attachment[assets/guide/Message.png;message.png]
$attachment[assets/guide/Right_Click.png;right_click.png]

$interactionReply[
    $ephemeral

    $title[How to Use KeepIt]
    $description[KeepIt helps you **save, categorize, and manage Discord messages** — all in your DMs. Here's how to get started.]
    $color[${configuration.colors.main}]

    $addField[Step 1: Find a message;Search for the message you want to save. Make sure it exists.;;1]
    $image[attachment://message.png;1]
    $color[${configuration.colors.main};1]

    $addField[Step 2: Right-click the message;Once you found the message you would like to bookmark, right click it and through the **Apps** section, press **Bookmark with KeepIt**.;;2]
    $image[attachment://right_click.png;2]
    $color[${configuration.colors.main};2]

    $addActionRow
      $addButton[mobile_guide;Mobile Guide;Primary;📱]
      $addButton[${configuration.links.discord};Support;Link]
      $addButton[${configuration.links.github};Open-source;Link]
]`,
};

export default ApplicationCommand;