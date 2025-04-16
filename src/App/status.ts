import { IApplicationCommandData } from '@tryforge/forgescript';
import configuration from '@/configuration.json';

/**
 * Represents the application command data for the "status" command.
 * 
 * This command provides information about the bot's status, including:
 * - Latency
 * - Round-trip time
 * - Current version
 * 
 * The command is available in direct messages and does not require any specific member permissions.
 * 
 * @constant
 * @type {IApplicationCommandData}
 * @property {object} data - The metadata for the command.
 * @property {number} data.type - The type of the command (1 represents a slash command).
 * @property {string} data.name - The name of the command ("status").
 * @property {string} data.description - A brief description of the command.
 * @property {boolean} data.dm_permission - Indicates if the command can be used in direct messages.
 * @property {null} data.default_member_permissions - Specifies the required permissions for members (null means no specific permissions are required).
 * @property {string} code - The logic executed when the command is invoked, including response formatting and dynamic data insertion.
*/
const Status: IApplicationCommandData = {
	data: {
		type: 1,
		name: 'status',
		description: 'Check bot status, ping, and uptime.',
		dm_permission: true,
		default_member_permissions: null,
	},
	code: `
		$interactionReply[
			$ephemeral
			$addField[KeepIt Status;Latency: \`$pingms\`
		Round-trip: \`$round[$math[$executionTime*100]]ms\`
		Version: \`${configuration.version}\`]
			$color[${configuration.colors.main}]
			$footer[© ${new Date().getFullYear()} KeepIt by Striatp • All rights reserved;$userAvatar[$botOwnerID]]
		]
`,
};

export default Status;