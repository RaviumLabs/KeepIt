"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Delete = {
    type: "interactionCreate",
    code: `
    $c[Check if the custom ID matches "delete"]
    $onlyIf[$customID==delete;]

    $c[Send an ephemeral interaction reply with a button indicating the bookmark was deleted]
    $interactionReply[
      $ephemeral
      $addActionRow
      $addButton[_;Bookmark deleted!;Danger;🗑️;true]
    ]

    $c[Delete the message from the channel]
    $!deleteMessage[$channelID;$messageID]
  `,
};
exports.default = Delete;
//# sourceMappingURL=delete.js.map