import { IApplicationCommandData } from '@tryforge/forgescript';
import configuration from '@/configuration.json';

const ApplicationCommand: IApplicationCommandData = {
    data: {
        type: 3,
        name: 'Delete Bookmark',
        dm_permission: true,
        default_member_permissions: null,
    },
    code: `
$onlyIf[$guildID==;$interactionReply[
    $ephemeral
    $description[$crossmark You can only delete bookmarks in private messages.]
    $color[${configuration.colors.error}]
]]

$interactionReply[
    $ephemeral
    $addActionRow
    $addButton[_;Bookmark deleted!;Danger;🗑️;true]
]

$!deleteMessage[$channelID;$option[message]]
`,
};

export default ApplicationCommand;