/**
 * Initializes and configures a ForgeClient instance with specified intents, events, and extensions.
 * Loads commands, functions, and application commands from the specified directories.
 * Logs in the client using the token provided in the environment variables.
 *
 * Dependencies:
 * - `@tryforge/forgescript`: Provides the `ForgeClient` class for creating and managing the client.
 * - `@tryforge/forge.db`: Provides the `ForgeDB` extension for database functionalities.
 * - `@tryforge/forge.canvas`: Provides the `ForgeCanvas` extension for canvas functionalities.
 * - `dotenv`: Loads environment variables from a `.env` file.
 *
 * Environment Variables:
 * - `DISCORD_TOKEN`: The token used to authenticate the client with Discord.
 *
 * Configuration:
 * - Intents: Specifies the events the client should listen to, such as guilds, messages, and message content.
 * - Events: Specifies the client events to handle, such as `ready`, `messageCreate`, and `interactionCreate`.
 * - Extensions: Adds additional functionalities to the client, such as database and canvas support.
 * - Prefixes: Specifies the command prefixes for the client.
 *
 * Directories:
 * - `./dist/Functions`: Directory containing custom functions to load into the client.
 * - `./dist/Commands`: Directory containing command files to load into the client.
 * - `./dist/App`: Directory containing application command files to load into the client.
 *
 * Error Handling:
 * - Logs an error if the `DISCORD_TOKEN` environment variable is missing.
*/

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