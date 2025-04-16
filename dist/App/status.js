"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const configuration_json_1 = __importDefault(require("@/configuration.json"));
const Status = {
    data: {
        type: 1,
        name: 'status',
        description: 'Check bot status, ping, and uptime.',
        dm_permission: true,
        default_member_permissions: null,
    },
    code: `
		$interactionReply[
			$ephemeral
			$addField[KeepIt Status;Latency: \`$pingms\`
		Round-trip: \`$round[$math[$executionTime*100]]ms\`
		Version: \`${configuration_json_1.default.version}\`]
			$color[${configuration_json_1.default.colors.main}]
			$footer[© ${new Date().getFullYear()} KeepIt by Striatp • All rights reserved;$userAvatar[$botOwnerID]]
		]
`,
};
exports.default = Status;
//# sourceMappingURL=status.js.map