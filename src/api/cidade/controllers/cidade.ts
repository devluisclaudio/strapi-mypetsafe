/**
 * cidade controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::cidade.cidade', ({strapi}):{} => ({

    async find(ctx) {
        const result = await strapi.service('api::cidade.cidade').find(ctx);
        return result;
    }
}));
