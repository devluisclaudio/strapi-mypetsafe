"use strict";
/**
 * ordem controller
 */
Object.defineProperty(exports, "__esModule", { value: true });
const strapi_1 = require("@strapi/strapi");
exports.default = strapi_1.factories.createCoreController('api::ordem.ordem', ({ strapi }) => ({
    async create(ctx) {
        const result = await strapi.service('api::ordem.ordem').create(ctx);
        return result;
    },
    async me(ctx) {
        const result = await strapi.service('api::ordem.ordem').me(ctx);
        return result;
    },
    async credits(ctx) {
        const result = await strapi.service('api::ordem.ordem').credits(ctx);
        return result;
    }
}));
