import { IApplicationCommandData } from '@tryforge/forgescript';
import configuration from '@/configuration.json';

const ApplicationCommand: IApplicationCommandData = {
    data: {
        type: 1,
        name: 'status',
        description: 'Check bot status, ping, and uptime.',
        dm_permission: true,
        default_member_permissions: null
    },
    code: `
$interactionReply[
    $ephemeral

    $addField[KeepIt Status;Latency:  \`$pingms\`
Round-trip: \`$round[$math[$executionTime*100]]ms\`
Version: \`0.9.2\`]
    $color[${configuration.colors.main}]
    $footer[© 2025 KeepIt by Striatp • All rights reserved;$userAvatar[$botOwnerID]]
]`,
};

export default ApplicationCommand;