/**
 * localizacao controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::localizacao.localizacao', ({ strapi }) =>({
    async saveLocalizacao(ctx) {
        const result = await strapi.service('api::localizacao.localizacao').create(ctx);
        return result;
    },
    async find(ctx) {
        const result = await strapi.service('api::localizacao.localizacao').find(ctx);
        return result;
    },
}));
