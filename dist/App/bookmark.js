"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const configuration_json_1 = __importDefault(require("@/configuration.json"));
const ApplicationCommand = {
    data: {
        type: 3,
        name: 'Bookmark with KeepIt',
        dm_permission: false,
        default_member_permissions: null
    },
    code: `
    $c[Check if the user is on cooldown for this command]
    $onlyIf[$getUserCooldownTime[$authorID]==0;$interactionReply[
      $let[Time;$ceil[$divide[$getUserCooldownTime[$authorID];1000]]]
      $ephemeral
      $description[$crossmark You are on cooldown for this command. Please wait **$get[Time]** second$if[$get[Time]>1;s;] before using it again.]
      $color[${configuration_json_1.default.colors.error}]
    ]]

    $try[
      $c[Validate if the message exists in the channel]
      $onlyIf[$messageExists[$channelID;$option[message]]==true;$interactionReply[
        $ephemeral
        $description[$crossmark The message you are trying to bookmark does not exist.]
        $color[${configuration_json_1.default.colors.error}]
      ]]

      $c[Ensure the bot has the required permissions]
      $onlyIf[$hasPerms[$guildID;$botID;UseApplicationCommands]==true;$interactionReply[
        $ephemeral
        $description[$crossmark I do not have permission to bookmark this message.]
        $color[${configuration_json_1.default.colors.error}]
      ]]

      $c[Check if the user's DMs are enabled]
      $onlyIf[$isUserDMEnabled[$authorID]==true;$interactionReply[
        $ephemeral
        $description[$crossmark Failed to bookmark this message, please make sure your DMs are enabled.]
        $color[${configuration_json_1.default.colors.error}]
      ]]

      $c[Prevent bookmarking messages from NSFW channels]
      $onlyIf[$channelNSFW[$channelID]==false;$interactionReply[
        $ephemeral
        $description[$crossmark You cannot bookmark a message from a NSFW channel.]
        $color[${configuration_json_1.default.colors.error}]
      ]]

      $c[Retrieve message details and attachments]
      $let[Message;$getMessage[$channelID;$option[message];content]]
      $let[MessageAtt;$getMessage[$channelID;$option[message];attachments;//SEP//]]
      $let[HasEmbeds;$hasEmbeds[$channelID;$option[message]]]
      $let[MessageLink;$messageLink[$channelID;$option[message]]]

      $c[Handle bookmarking for messages with or without embeds]
      $ifx[
        $if[$get[HasEmbeds]==true;
          $let[ID;$sendMessage[$dmChannelID;
            $if[$get[Message]==;📌 **Bookmarked Embed Message**;$get[Message]]
$if[$get[MessageAtt]!=;Attachment(s): $arrayLoad[Attachments;//SEP//;$get[MessageAtt]]$arrayJoin[Attachments;, ]]
            $loadEmbeds[$getEmbeds[$channelID;$option[message]]]
            $addActionRow
            $addButton[$get[MessageLink];Jump to message;Link]
            $addButton[tag;Tags;Secondary;🏷️;true]
            $addButton[category;Category;Secondary;🗃;true]
            $addActionRow
            $addButton[delete;Delete;Danger;🗑️]
            $addButton[details_$channelID_$option[message];Details;Secondary;📄]
          ;true]]
          $interactionReply[
            $ephemeral
            $addActionRow
            $addButton[_;Message bookmarked!;Primary;🔖;true]
          ]
        ]
        $else[
          $let[ID;$sendMessage[$dmChannelID;
            $title[📌 Bookmarked Message]
            $description[$get[Message]]
            $if[$get[MessageAtt]!=;
              $arrayLoad[Attachments;//SEP//;$get[MessageAtt]]
              $addField[Attachments;$arrayJoin[Attachments;, ]]
            ]
            $color[${configuration_json_1.default.colors.main}]
            $footer[Bookmarked with KeepIt • 🔖]
            $timestamp[$getMessage[$channelID;$option[message];timestamp]]
            $addActionRow
            $addButton[$get[MessageLink];Jump to message;Link]
            $addButton[tag;Tags;Secondary;🏷️;true]
            $addButton[category;Category;Secondary;🗃;true]
            $addActionRow
            $addButton[delete;Delete;Danger;🗑️]
            $addButton[details_$channelID_$option[message];Details;Secondary;📄]
          ;true]]
          $interactionReply[
            $ephemeral
            $addActionRow
            $addButton[_;Message bookmarked!;Primary;🔖;true]
          ]
        ]
      ]
      $c[Set a cooldown for the user after successful execution]
      $userCooldown[$authorID;5000]
    ;
      $c[Handle unexpected errors]
      $interactionReply[
        $ephemeral
        $description[$crossmark An unexpected error occurred while processing your request. Please try again later.]
        $color[${configuration_json_1.default.colors.error}]
      ]
    ]
`,
};
exports.default = ApplicationCommand;
//# sourceMappingURL=bookmark.js.map