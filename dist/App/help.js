"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const configuration_json_1 = __importDefault(require("@/configuration.json"));
const ApplicationCommand = {
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
    $color[${configuration_json_1.default.colors.main}]
    $footer[© 2025 KeepIt by Striatp • All rights reserved;$userAvatar[$botOwnerID]]

    $addActionRow
      $addButton[${configuration_json_1.default.links.discord};Support;Link]
      $addButton[${configuration_json_1.default.links.github};Open-source;Link]
]`,
};
exports.default = ApplicationCommand;
//# sourceMappingURL=help.js.map