import { IApplicationCommandData } from '@tryforge/forgescript';
import configuration from '@/configuration.json'

const ApplicationCommand: IApplicationCommandData = {
    data: {
        type: 1,
        name: 'help',
        description: 'Get support resources, community links, and more. Use /guide to learn how to use KeepIt.'
    },
    code: `
$interactionReply[
    $ephemeral

    $title[KeepIt]
    $description[KeepIt is a minimalist Discord bot that lets you bookmark messages with one click. Categorize, tag, and manage saved messages straight from your DMs.]
    $addField[Support;>>> Looking for support, community links, or extra resources? You're in the right place. For instructions on how to use KeepIt, use the /guide command.]
    $color[${configuration.colors.main}]
    $footer[© 2025 KeepIt by Striatp • All rights reserved;$userAvatar[$botOwnerID]]

    $addActionRow
      $addButton[${configuration.links.discord};Support;Link]
      $addButton[${configuration.links.github};Open-source;Link]
]`,
};

export default ApplicationCommand;