import { IApplicationCommandData } from '@tryforge/forgescript';
import configuration from '@/configuration.json';

/**
 * Represents the configuration for an application command to delete a bookmark.
 * This command is designed to be used in private messages only.
 *
 * @constant
 * @type {IApplicationCommandData}
 * @property {object} data - The metadata for the application command.
 * @property {number} data.type - The type of the command (3 indicates a message command).
 * @property {string} data.name - The name of the command ("Delete Bookmark").
 * @property {boolean} data.dm_permission - Indicates if the command can be used in direct messages.
 * @property {null} data.default_member_permissions - Specifies the default permissions for members (null means no specific permissions are required).
 * @property {string} code - The logic executed when the command is triggered.
 * 
 * The command performs the following actions:
 * - Ensures it is executed in a private message context.
 * - Sends an ephemeral interaction reply with a button indicating the bookmark was deleted.
 * - Deletes the specified message from the channel.
*/
const Delete: IApplicationCommandData = {
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

		$onlyIf[$getMessage[$channelID;$option[message];authorID]==$botID;$interactionReply[
			$ephemeral
			$description[$crossmark This message is not a bookmark.]
			$color[${configuration.colors.error}]
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
				$color[${configuration.colors.error}]
			]
		]
`,
};

export default Delete;