"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const configuration_json_1 = __importDefault(require("@/configuration.json"));
const Privacy = {
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
	$color[${configuration_json_1.default.colors.main}]
	$footer[© ${new Date().getFullYear()} KeepIt by Striatp • All rights reserved;$userAvatar[$botOwnerID]]
]
`,
};
exports.default = Privacy;
//# sourceMappingURL=privacy.js.map