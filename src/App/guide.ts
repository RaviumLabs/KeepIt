import { IApplicationCommandData } from '@tryforge/forgescript';
import configuration from '@/configuration.json';

/**
 * Represents the application command data for the "guide" command in the KeepIt bot.
 * This command provides users with a guide on how to use KeepIt, a minimalist message bookmarking bot.
 *
 * @constant
 * @type {IApplicationCommandData}
 *
 * @property {object} data - The metadata for the application command.
 * @property {number} data.type - The type of the command (1 represents a slash command).
 * @property {string} data.name - The name of the command ("guide").
 * @property {string} data.description - A brief description of the command's purpose.
 * @property {boolean} data.dm_permission - Indicates whether the command can be used in DMs.
 * @property {null} data.default_member_permissions - Specifies the default permissions required to use the command (null means no specific permissions are required).
 *
 * @property {string} code - The logic and response structure for the "guide" command.
 * The response includes:
 * - Attachments for visual guides (e.g., message and right-click images).
 * - An ephemeral interaction reply with a title, description, and color.
 * - Step-by-step instructions on how to use KeepIt.
 * - Action buttons for accessing the mobile guide, support, and GitHub links.
*/
const Guide: IApplicationCommandData = {
	data: {
		type: 1,
		name: 'guide',
		description: 'Learn how to use KeepIt — your minimalist message bookmarking bot.',
		dm_permission: true,
		default_member_permissions: null
	},
	code: `
		$attachment[assets/guide/Message.png;message.png]
		$attachment[assets/guide/Right_Click.png;right_click.png]

		$interactionReply[
			$ephemeral

			$title[How to Use KeepIt] $c[Set the title of the guide]
			$description[KeepIt helps you **save, categorize, and manage Discord messages** — all in your DMs. Here's how to get started.]
			$color[${configuration.colors.main}]

			$addField[Step 1: Find a message;Search for the message you want to save. Make sure it exists.;;1]
			$image[attachment://message.png;1]
			$color[${configuration.colors.main};1]

			$addField[Step 2: Right-click the message;Once you found the message you would like to bookmark, right click it and through the **Apps** section, press **Bookmark with KeepIt**.;;2]
			$image[attachment://right_click.png;2]
			$color[${configuration.colors.main};2]

			$c[Buttons for more support]
			$addActionRow
				$addButton[mobile_guide;Mobile Guide;Primary;📱]
				$addButton[${configuration.links.discord};Support;Link]
				$addButton[${configuration.links.github};Open-source;Link]
		]
`,
};

export default Guide;