"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const configuration_json_1 = __importDefault(require("@/configuration.json"));
const ApplicationCommand = {
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
    $color[${configuration_json_1.default.colors.error}]
]]

$interactionReply[
    $ephemeral
    $addActionRow
    $addButton[_;Bookmark deleted!;Danger;🗑️;true]
]

$!deleteMessage[$channelID;$option[message]]
`,
};
exports.default = ApplicationCommand;
//# sourceMappingURL=remove.js.map