/**
 * suporte service
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreService(
  "api::suporte.suporte",
  ({ strapi }): {} => ({
    async create(ctx) {
      const user = ctx.state.user;
      const { body } = ctx.request;

      const entry = await strapi.entityService.create("api::suporte.suporte", {
        data: {
          descricao: body.descricao,
          assunto: body.assunto,
          users_permissions_user: user.id,
        },
      });

      return entry;
    },
  })
);
