"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const configuration_json_1 = __importDefault(require("@/configuration.json"));
const Delete = {
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

		$onlyIf[$getMessage[$channelID;$option[message];authorID]==$botID;$interactionReply[
			$ephemeral
			$description[$crossmark This message is not a bookmark.]
			$color[${configuration_json_1.default.colors.error}]
		]]

		$c[Send an ephemeral interaction reply with a button indicating the bookmark was deleted]
		$interactionReply[
			$ephemeral
			$addActionRow
			$addButton[_;Bookmark deleted!;Danger;🗑️;true]
		]

		$c[Delete the message from the channel]
		$try[
			$!deleteMessage[$channelID;$option[message]]
		;
			$interactionReply[
				$ephemeral
				$description[$crossmark An unknown error has occured.]
				$color[${configuration_json_1.default.colors.error}]
			]
		]
`,
};
exports.default = Delete;
//# sourceMappingURL=delete.js.map