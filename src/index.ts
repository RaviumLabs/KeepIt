// import { config } from './config';
import { ForgeClient } from '@tryforge/forgescript';
import { ForgeDB } from '@tryforge/forge.db';
import { ForgeCanvas } from '@tryforge/forge.canvas';
import * as dotenv from 'dotenv';
import { join } from 'path';

// Environment variables
dotenv.config();

// Client configuration
const client: ForgeClient = new ForgeClient({
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
client.functions.load(join(__dirname, 'Functions'));
client.commands.load('./dist/Commands');
client.applicationCommands.load('./dist/App');

// API routes loader
// API.router.load("./dist/Routes");

// Client login
const token: string = process.env.DISCORD_TOKEN || '';
if (token) {
    client.login(token);
} else {
    console.error('Token is missing from environment variables.');
}