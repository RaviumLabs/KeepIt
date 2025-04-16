import { CommandType, IBaseCommand } from '@tryforge/forgescript';
import configuration from '@/configuration.json';

/**
 * Represents the "Details" command for the KeepIt application.
 * This command is triggered by an interaction creation event and is used to fetch and display
 * detailed information about a bookmarked message in Discord.
 *
 * @type {IBaseCommand<CommandType>}
 *
 * @property {string} type - The trigger type for the command, set to "interactionCreate".
 * @property {string} code - The logic executed when the command is triggered. It includes:
 *   - Validation to ensure the custom ID contains "details".
 *   - Parsing of the custom ID to extract relevant IDs.
 *   - Verification of the existence of the referenced message.
 *   - Fetching and displaying details about the message, such as:
 *     - Message link
 *     - Author information
 *     - Date sent and bookmarked
 *     - Channel and server details
 *     - Additional metadata like category and tags (currently set to "None").
 *
 * The command ensures ephemeral responses to maintain user privacy and includes error handling
 * for cases where the referenced message no longer exists.
*/
const Details: IBaseCommand<CommandType> = {
  type: "interactionCreate", // Trigger type for the command
  code: `
    $c[Ensure the custom ID includes 'details']
    $onlyIf[$includes[$customID;details]==true;]

    $c[Load the IDs from the custom ID]
    $arrayLoad[IDs;_;$replace[$customID;__;_]]

    $c[Check if the message exists]
    $onlyIf[$messageExists[$arrayAt[IDs;1];$arrayAt[IDs;2]];$interactionReply[
      $ephemeral
      $description[$crossmark Failed to fetch data from the message, the message doesn't exist anymore.]
      $color[${configuration.colors.error}]
    ]]

    $c[Reply with the message details]
    $interactionReply[
      $ephemeral
      $title[📄 Message's Details]
      $description[Here's a full breakdown of the bookmarked message. Remember, KeepIt does not store messages nor their data. These details were fetched by finding the original message.]
      
      $addField[Message Link;[Jump to Message\\](https://discord.com/channels/$getMessage[$arrayAt[IDs;1];$arrayAt[IDs;2];guildID]/$arrayAt[IDs;1]/$arrayAt[IDs;2])]
      $addField[Message Author;<@$getMessage[$arrayAt[IDs;1];$arrayAt[IDs;2];authorID]> (\`$getMessage[$arrayAt[IDs;1];$arrayAt[IDs;2];authorID]\`)]
      $addField[Date Sent;<t:$round[$divide[$getMessage[$arrayAt[IDs;1];$arrayAt[IDs;2];timestamp];1000]]:F> (<t:$round[$divide[$getMessage[$arrayAt[IDs;1];$arrayAt[IDs;2];timestamp];1000]]:R>)]
      $addField[Date Bookmarked;<t:$round[$divide[$getMessage[$channelID;$messageID;timestamp];1000]]:F> (<t:$round[$divide[$getMessage[$channelID;$messageID;timestamp];1000]]:R>)]
      $addField[Channel;<#$arrayAt[IDs;1]> (\`#$channelName[$arrayAt[IDs;1]]\`)]
      $addField[Category;None]
      $addField[Tags;None]
      $addField[Bookmarked By;<@$authorID> (\`You\`)]
      $addField[Message ID;\`$arrayAt[IDs;2]\`]
      
      $addField[Server;\`$guildName[$getMessage[$arrayAt[IDs;1];$arrayAt[IDs;2];guildID]]\` (ID: \`$getMessage[$arrayAt[IDs;1];$arrayAt[IDs;2];guildID]\`)]
      $color[${configuration.colors.main}]
      $footer[© ${new Date().getFullYear()} KeepIt by Striatp • All rights reserved;$userAvatar[$botOwnerID]]
    ]
  `,
};

export default Details;