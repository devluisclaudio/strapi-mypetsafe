"use strict";
/**
 * cidade controller
 */
Object.defineProperty(exports, "__esModule", { value: true });
const strapi_1 = require("@strapi/strapi");
exports.default = strapi_1.factories.createCoreController('api::cidade.cidade', ({ strapi }) => ({
    async find(ctx) {
        const result = await strapi.service('api::cidade.cidade').find(ctx);
        return result;
    }
}));
