/**
 * download controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::download.download',
    ({ strapi }) => ({
        async find(ctx) {
            const result = await strapi.service('api::download.download').find(ctx);
            return result;
        },
        async findOne(ctx) {
            const result = await strapi.service('api::download.download').findOne(ctx);
            return result;
        }
    })
);
