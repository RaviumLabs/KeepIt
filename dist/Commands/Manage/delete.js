"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Command = {
    type: "interactionCreate",
    code: `
$onlyIf[$customID==delete;]
$interactionReply[
    $ephemeral
    $addActionRow
    $addButton[_;Bookmark deleted!;Danger;🗑️;true]
]
$!deleteMessage[$channelID;$messageID]`,
};
exports.default = Command;
//# sourceMappingURL=delete.js.map