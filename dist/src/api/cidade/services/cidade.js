"use strict";
/**
 * cidade service
 */
Object.defineProperty(exports, "__esModule", { value: true });
const strapi_1 = require("@strapi/strapi");
exports.default = strapi_1.factories.createCoreService('api::cidade.cidade', ({ strapi }) => ({
    async find(ctx) {
        const id = ctx.query.filters.estado.id;
        return await strapi.entityService.findMany('api::cidade.cidade', {
            filters: {
                estado: {
                    id
                }
            },
            populate: {
                estado: {
                    fields: ['id']
                }
            }
        });
    }
}));
