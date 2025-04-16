import { IApplicationCommandData } from '@tryforge/forgescript';
import configuration from '@/configuration.json';

/**
 * Represents the Terms of Service command for the KeepIt bot.
 * 
 * This command provides users with the Terms of Service for using the bot,
 * including details about acceptance of terms, bot usage, availability,
 * limitations, disclaimers, and contact information.
 * 
 * @constant
 * @type {IApplicationCommandData}
 * @property {object} data - The metadata for the command.
 * @property {number} data.type - The type of the command (1 for slash commands).
 * @property {string} data.name - The name of the command ("terms").
 * @property {string} data.description - A brief description of the command.
 * @property {boolean} data.dm_permission - Indicates if the command can be used in DMs.
 * @property {null} data.default_member_permissions - Permissions required to use the command (null for no specific permissions).
 * @property {string} code - The code executed when the command is triggered, which generates an ephemeral reply containing the Terms of Service.
*/
const Terms: IApplicationCommandData = {
	data: {
		type: 1,
		name: 'terms',
		description: 'View the Terms of Service for using the bot.',
		dm_permission: true,
		default_member_permissions: null
	},
	code: `
		$interactionReply[
			$ephemeral
			$title[📄 KeepIt — Terms of Service]
			$description[Last Updated: April 12, 2025
		Bot Name: KeepIt
		Developer: Striatp]
			$addField[1. Acceptance of Terms;By using KeepIt, you agree to follow these Terms of Service. If you do not agree with any part of these terms, please stop using the bot.]
			$addField[2. Bot Usage;- KeepIt is provided as-is with no guarantee of uptime or performance.
- Misuse of the bot (e.g., spamming commands, abuse) may result in restrictions or blacklisting.
- We reserve the right to update the bot, commands, and terms at any time.]
			$addField[3. Availability;KeepIt may be taken offline for maintenance or discontinued at any time without prior notice. While we aim for stability, we do not guarantee uninterrupted access.]
			$addField[4. Limitations;KeepIt is a stateless, minimalist bot and is limited to the features explicitly provided. No additional customizations are promised unless otherwise stated.]
			$addField[5. Disclaimer;KeepIt is not affiliated with Discord. Use it at your own discretion. We are not responsible for any misuse or issues caused by using the bot.]
			$addField[Contact;Questions or issues? Message @Striatp on Discord.]
			$addField[© Copyright;KeepIt is a project by Striatp. All rights reserved.]
			$color[${configuration.colors.main}]
			$footer[© ${new Date().getFullYear()} KeepIt by Striatp • All rights reserved;$userAvatar[$botOwnerID]]
		]
`,
};

export default Terms;