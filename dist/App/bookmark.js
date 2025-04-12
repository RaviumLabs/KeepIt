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
$onlyIf[$getUserCooldownTime[$authorID]==0;$interactionReply[
    $let[Time;$ceil[$divide[$getUserCooldownTime[$authorID];1000]]]
    $ephemeral
    $description[$crossmark You are on cooldown for this command. Please wait **$get[Time]** second$if[$get[Time]>1;s;] before using it again.]
    $color[${configuration_json_1.default.colors.error}]
]]
$try[
    $onlyIf[$messageExists[$channelID;$option[message]]==true;$interactionReply[
        $ephemeral
        $description[$crossmark The message you are trying to bookmark does not exist.]
        $color[${configuration_json_1.default.colors.error}]
    ]]

    $onlyIf[$hasPerms[$guildID;$botID;UseApplicationCommands]==true;$interactionReply[
        $ephemeral
        $description[$crossmark I do not have permission to bookmark this message.]
        $color[${configuration_json_1.default.colors.error}]
    ]]

    $onlyIf[$isUserDMEnabled[$authorID]==true;$interactionReply[
        $ephemeral
        $description[$crossmark Failed to bookmark this message, please make sure your DMs are enabled.]
        $color[${configuration_json_1.default.colors.error}]
    ]]

    $onlyIf[$channelNSFW[$channelID]==false;$interactionReply[
        $ephemeral
        $description[$crossmark You cannot bookmark a message from a NSFW channel.]
        $color[${configuration_json_1.default.colors.error}]
    ]]

    $let[Message;$getMessage[$channelID;$option[message];content]]
    $let[MessageAtt;$getMessage[$channelID;$option[message];attachments;//SEP//]]
    $let[HasEmbeds;$hasEmbeds[$channelID;$option[message]]]

    $let[MessageLink;$messageLink[$channelID;$option[message]]]

    $ifx[
        $if[$and[$get[HasEmbeds]==true;$get[Message]==]==true;
            $interactionReply[
                $ephemeral
                $description[$crossmark KeepIt doesn't support embeds bookmarks yet.]
                $color[${configuration_json_1.default.colors.error}]
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
    $userCooldown[$authorID;5000]
    ;
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