"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const forgescript_1 = require("@tryforge/forgescript");
const forge_db_1 = require("@tryforge/forge.db");
const forge_canvas_1 = require("@tryforge/forge.canvas");
const forge_api_1 = require("@tryforge/forge.api");
const dotenv = __importStar(require("dotenv"));
const path_1 = require("path");
dotenv.config();
const API = new forge_api_1.ForgeAPI({
    port: 3000,
    logLevel: 0,
    auth: {
        type: 0,
    },
});
const client = new forgescript_1.ForgeClient({
    intents: [
        'Guilds',
        'GuildMessages',
        'MessageContent'
    ],
    events: [
        'debug',
        'error',
        'interactionCreate',
        'messageCreate',
        'ready',
        'shardDisconnect',
        'shardReady',
        'shardError',
        'shardReconnecting',
        'shardResume',
        'roleDelete',
        'channelDelete'
    ],
    extensions: [
        new forge_db_1.ForgeDB(),
        new forge_canvas_1.ForgeCanvas(),
        API
    ],
    prefixes: [
        '.'
    ]
});
client.functions.load((0, path_1.join)(__dirname, 'Functions'));
client.commands.load('./dist/Commands');
client.applicationCommands.load('./dist/App');
API.router.load("./dist/Routes");
const token = process.env.DISCORD_TOKEN || '';
if (token) {
    client.login(token);
}
else {
    console.error('Token is missing from environment variables.');
}
//# sourceMappingURL=index.js.map