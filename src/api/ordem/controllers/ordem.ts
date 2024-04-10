/**
 * ordem controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::ordem.ordem',
    ({ strapi }) => ({
        async create(ctx) {
            const result = await strapi.service('api::ordem.ordem').create(ctx);
            return result;
        }
    })
);
