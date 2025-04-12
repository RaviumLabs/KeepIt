import { CommandType, IBaseCommand } from '@tryforge/forgescript';
import configuration from '@/configuration.json'

const Command: IBaseCommand<CommandType> = {
  type: "interactionCreate",
  code: `
$onlyIf[$includes[$customID;details]==true;]

$arrayLoad[IDs;_;$replace[$customID;__;_]]
$onlyIf[$messageExists[$arrayAt[IDs;1];$arrayAt[IDs;2]];$interactionReply[
    $ephemeral
    $description[$crossmark Failed to fetch data from the message, the message doesn't exist anymore.]
    $color[${configuration.colors.error}]
]]

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
    $footer[© 2025 KeepIt by Striatp • All rights reserved;$userAvatar[$botOwnerID]]
    
    $attachment[$getMessage[$arrayAt[IDs;1];$arrayAt[IDs;2];content];content.txt;true]
]
`,
};

export default Command;