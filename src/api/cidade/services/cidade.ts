/**
 * cidade service
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreService('api::cidade.cidade', ({ strapi }): {} => ({
    async find(ctx) {
        const id = ctx.query.filters.estado.id
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
        })
    }
}))
