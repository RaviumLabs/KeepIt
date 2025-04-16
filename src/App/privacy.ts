import { IApplicationCommandData } from '@tryforge/forgescript';
import configuration from '@/configuration.json';

/**
 * Represents the application command data for the "privacy" command.
 * This command provides users with the Privacy Policy details of the KeepIt bot.
 * 
 * @constant
 * @type {IApplicationCommandData}
 * 
 * @property {object} data - The metadata for the application command.
 * @property {number} data.type - The type of the command (1 for chat input commands).
 * @property {string} data.name - The name of the command ("privacy").
 * @property {string} data.description - A brief description of the command's purpose.
 * @property {boolean} data.dm_permission - Indicates if the command can be used in DMs.
 * @property {null} data.default_member_permissions - Permissions required to use the command (null for no restrictions).
 * 
 * @property {string} code - The command's execution logic, written in a custom scripting language.
 * 
 * @description
 * The "privacy" command provides users with a detailed Privacy Policy, outlining:
 * - Data collection practices (or lack thereof).
 * - Use of direct messages for delivering bookmarked messages.
 * - Absence of database storage or third-party API interactions.
 * - Security measures and permissions framework.
 * - Contact information for inquiries.
 * - Disclaimer about potential changes to the policy.
 * 
 * The Privacy Policy is displayed in an ephemeral interaction reply, ensuring user privacy.
*/
const ApplicationCommand: IApplicationCommandData = {
	data: {
		type: 1,
		name: 'privacy',
		description: 'View the Privacy Policy for how your data is handled.',
		dm_permission: true,
		default_member_permissions: null
	},
	code: `
$interactionReply[
	$ephemeral
	$title[🔐 KeepIt — Privacy Policy]
	$description[Last Updated: April 12, 2025
Bot Name: KeepIt
Developer: Striatp]
	$addField[1. What Data We Collect;KeepIt does not collect or store any of the following:
- ❌ User IDs
- ❌ Message content
- ❌ Server or channel data
- ❌ Persistent logs or analytics
All actions are temporary and handled in real time, with no data stored after execution.]
	$addField[2. Use of Direct Messages;KeepIt uses DMs to deliver bookmarked messages. If DMs are disabled:
- An error will be returned.
- No data will be saved or stored.]
	$addField[3. No Database Storage;There is no backend database. All message bookmarking is session-based and does not persist.]
	$addField[4. No Third-Party Sharing;KeepIt does not interact with any third-party APIs. Your information is never shared.]
	$addField[5. Security;The bot operates within Discord’s permissions framework. Always ensure the bot has only the necessary permissions in your server.]
	$addField[6. Changes to This Policy;This privacy policy may change. The most recent version will always be made available.]
	$addField[Contact;Questions or issues? Message @Striatp on Discord.]
	$addField[© Copyright;KeepIt is a private, minimalist bot. We don’t store your data — because we don’t need to.]
	$color[${configuration.colors.main}]
	$footer[© 2025 KeepIt by Striatp • All rights reserved;$userAvatar[$botOwnerID]]
]
`,
};

export default ApplicationCommand;