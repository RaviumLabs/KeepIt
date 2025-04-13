"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const configuration_json_1 = __importDefault(require("@/configuration.json"));
const ApplicationCommand = {
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
    $color[${configuration_json_1.default.colors.main}]
    $footer[© 2025 KeepIt by Striatp • All rights reserved;$userAvatar[$botOwnerID]]
]`,
};
exports.default = ApplicationCommand;
//# sourceMappingURL=stastus.js.map