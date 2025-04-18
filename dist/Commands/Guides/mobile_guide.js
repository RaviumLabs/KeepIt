"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const configuration_json_1 = __importDefault(require("@/configuration.json"));
const ModbileGuide = {
    type: 'interactionCreate',
    code: `
    $c[Ensure the interaction is for the 'mobile_guide' custom ID]
    $onlyIf[$customID==mobile_guide;]

    $attachment[assets/guide/Message.png;message.png] $c[Attach the 'Message' guide image]
    $attachment[assets/guide/Hold.png;hold.png] $c[Attach the 'Hold' guide image]

    $interactionReply[
      $ephemeral

      $title[How to Use KeepIt]
      $description[KeepIt helps you **save, categorize, and manage Discord messages** — all in your DMs. Here's how to get started.]
      $color[${configuration_json_1.default.colors.main}]

      $addField[Step 1: Find a message;Search for the message you want to save. Make sure it exists.]
      $image[attachment://message.png]

      $addField[Step 2: Hold the message;Once you found the message you would like to bookmark, hold it and through the **Apps** section, press **Bookmark with KeepIt**.;;1]
      $image[attachment://hold.png;1]
      $color[${configuration_json_1.default.colors.main};1]
    ]
  `,
};
exports.default = ModbileGuide;
//# sourceMappingURL=mobile_guide.js.map