"use strict";
/**
 * ordem service
 */
Object.defineProperty(exports, "__esModule", { value: true });
const strapi_1 = require("@strapi/strapi");
exports.default = strapi_1.factories.createCoreService('api::ordem.ordem', ({ strapi }) => ({
    async create(ctx) {
        const user = ctx.state.user;
        const { body } = ctx.request;
        const entry = await strapi.entityService.create('api::ordem.ordem', {
            data: {
                paymentStripeId: body.paymentStripeId,
                PaymentMethodStripeId: body.PaymentMethodStripeId,
                description: body.description,
                amount: body.amount,
                status: body.status,
                credit: body.credit,
                users_permissions_user: user.id
            },
        });
        return entry;
    },
}));
