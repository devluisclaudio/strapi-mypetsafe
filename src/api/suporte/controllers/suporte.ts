/**
 * suporte controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::suporte.suporte",
  ({ strapi }) => ({
    async create(ctx) {
        const result = await strapi.service('api::suporte.suporte').create(ctx);
        return result;
    },
  })
);
