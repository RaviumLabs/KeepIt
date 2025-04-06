"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
module.exports = {
    url: "/api/stats",
    method: "GET",
    auth: true,
    handler: function (ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            ctx.res.send({
                client: {
                    name: ctx.client.user.username,
                    id: ctx.client.user.id,
                    ping: ctx.client.ws.ping,
                    uptime: ctx.client.uptime
                },
                guildCount: ctx.client.guilds.cache.size,
                userCount: ctx.client.guilds.cache.reduce((total, guild) => total + (guild.memberCount || 0), 0),
                commandCount: Object.values(ctx.client.commands).flat().length
            });
        });
    },
};
//# sourceMappingURL=stats.js.map