import { IApplicationCommandData } from '@tryforge/forgescript';
import configuration from '@/configuration.json';

/**
 * Represents the application command data for the "help" command in the KeepIt Discord bot.
 * This command provides users with support resources, community links, and additional information
 * about the bot. It also includes an interactive response with an embed and action buttons.
 *
 * @constant
 * @type {IApplicationCommandData}
 * 
 * @property {object} data - The metadata for the application command.
 * @property {number} data.type - The type of the command (1 represents a slash command).
 * @property {string} data.name - The name of the command ("help").
 * @property {string} data.description - A brief description of the command's purpose.
 * @property {boolean} data.dm_permission - Indicates whether the command can be used in DMs.
 * @property {null} data.default_member_permissions - Specifies the default permissions for members (null means no restrictions).
 * 
 * @property {string} code - The logic executed when the command is invoked. This includes:
 * - Sending an ephemeral reply with an embed containing:
 *   - A title and description about KeepIt.
 *   - A field for support and additional resources.
 *   - A color based on the main configuration color.
 *   - A footer with copyright information and the bot owner's avatar.
 * - Adding an action row with buttons for support and GitHub links.
*/
const ApplicationCommand: IApplicationCommandData = {
	data: {
		type: 1,
		name: 'help',
		description: 'Get support resources, community links, and more. Use /guide to learn how to use KeepIt.',
		dm_permission: true,
		default_member_permissions: null
	},
	code: `
		$interactionReply[
			$ephemeral

			$title[KeepIt]
			
			$c[Set the description of the embed]
			$description[KeepIt is a minimalist Discord bot that lets you bookmark messages with one click. Categorize, tag, and manage saved messages straight from your DMs.]
			
			$c[Add a field for support and additional resources]
			$addField[Support;>>> Looking for support, community links, or extra resources? You're in the right place. For instructions on how to use KeepIt, use the </guide:1360662597501976798> command.]
			
			$c[Set the color of the embed using the main color from the configuration]
			$color[${configuration.colors.main}]
			
			$c[Add a footer with copyright information and the bot owner's avatar]
			$footer[© 2025 KeepIt by Striatp • All rights reserved;$userAvatar[$botOwnerID]]

			$c[Add an action row with buttons for support and GitHub links]
			$addActionRow
				$addButton[${configuration.links.discord};Support;Link]
				$addButton[${configuration.links.github};Open-source;Link]
		]
`,
};

export default ApplicationCommand;