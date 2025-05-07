/**
 * localizacao service
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreService(
  "api::localizacao.localizacao",
  ({ strapi }): {} => ({
    async create(ctx) {
      const { body } = ctx.request;

      const pet = await strapi.entityService.findMany("api::pet.pet", {
        filters: {
          code: body.code,
        },
        populate: {
          users_permissions_user: {
            fields: ["id", "username", "email"],
          },
          }
        })

        if(pet.length == 0){
          return { sucess: false, message: "Pet não encontrado!" };
        }

      const entry = await strapi.entityService.create("api::localizacao.localizacao", {
        data: {
          ip: body.ip,
          userAgent: body.userAgent,
          latitude: body.location? body.location.latitude : null,
          longitude: body.location? body.location.longitude : null,
          pet: pet[0].id,
          users_permissions_user: pet[0].users_permissions_user.id,
        },
      });

      return entry
    },
  })
);
