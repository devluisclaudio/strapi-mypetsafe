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
        },
      });

      if (pet.length == 0) {
        return { sucess: false, message: "Pet não encontrado!" };
      }

      const entry = await strapi.entityService.create(
        "api::localizacao.localizacao",
        {
          data: {
            ip: body.ip,
            userAgent: body.userAgent,
            latitude: body.location ? String(body.location.latitude) : null,
            longitude: body.location ? String(body.location.longitude) : null,
            pet: pet[0].id,
            users_permissions_user: pet[0].users_permissions_user.id,
          },
        }
      );

      return entry;
    },
    async find(ctx) {
      const user = ctx.state.user;
      let filters: any = {
        users_permissions_user: user.id,
      };
      if (ctx.query.pet) {
        filters.pet = ctx.query.pet;
      }

      const localizaoes = await strapi.entityService.findMany(
        "api::localizacao.localizacao",
        {
          filters,
          populate: {
            pet: {
              fields: ["id", "name"],
            },
            users_permissions_user: {
              fields: ["id", "username", "email"],
            },
          },
        }
      );

      return localizaoes;
    },
  })
);
