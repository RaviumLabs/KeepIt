"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Command = {
    type: "messageCreate",
    name: "e",
    code: `
$onlyIf[$authorID==876801702051856424;]
$eval[$message]
`,
};
exports.default = Command;
//# sourceMappingURL=eval.js.map