import { ForgeClient } from '@tryforge/forgescript';
import { ForgeDB } from '@tryforge/forge.db';
import { ForgeCanvas } from '@tryforge/forge.canvas';
import * as dotenv from 'dotenv';

// Environment variables
dotenv.config();

// Client configuration
const Client: ForgeClient = new ForgeClient({
    // Intents
    intents: [
        'Guilds',
        'GuildMessages',
        'MessageContent'
    ],
    // Events
    events: [
        'debug',
        'error',
        'messageCreate',
        'interactionCreate',
        'ready',
        'shardDisconnect',
        'shardReady',
        'shardError',
        'shardReconnecting',
        'shardResume',
    ],
    // Extensions
    extensions: [
        new ForgeDB(),
        new ForgeCanvas(),
    ],
    // Prefix
    prefixes: [
        '.'
    ]
});

// Commands & functions loader
Client.functions.load('./dist/Functions');
Client.commands.load('./dist/Commands');
Client.applicationCommands.load('./dist/App');

// Token
const token: string = process.env.DISCORD_TOKEN || '';
// Client login
token ? Client.login(token) : console.error('Token is missing from environment variables.');