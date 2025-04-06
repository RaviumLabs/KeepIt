module.exports = {
    url: "/api/stats",
    method: "GET",
    auth: true,
    handler: async function (ctx) {
        ctx.res.send({
            client: {
                name: ctx.client.user.username,
                id: ctx.client.user.id,
                ping: ctx.client.ws.ping,
                uptime: ctx.client.uptime
            },
            guildCount: ctx.client.guilds.cache.size,
            userCount: ctx.client.guilds.cache.reduce((total, guild) => total + (guild.memberCount || 0), 0),
            commandCount: Object.values(ctx.client.commands).flat().length // Flatten command arrays and count total commands
        });
    },
};