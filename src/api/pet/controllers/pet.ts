/**
 * pet controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::pet.pet',
    ({ strapi }) => ({
        async find(ctx) {
            const result = await strapi.service('api::pet.pet').find(ctx);
            return result;
        },
        async findOne(ctx) {
            const result = await strapi.service('api::pet.pet').findOne(ctx);

            return result;
        },
        async count(ctx) {
            const result = await strapi.service('api::pet.pet').count(ctx);
            return result;
        },
        async create(ctx) {
            const result = await strapi.service('api::pet.pet').create(ctx);
            return result;
        },

        async webhook(ctx) {
            console.log(ctx)
            return true;
        },
    })
);