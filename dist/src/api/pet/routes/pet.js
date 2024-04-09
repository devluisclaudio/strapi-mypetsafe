"use strict";
/**
 * pet router
 */
Object.defineProperty(exports, "__esModule", { value: true });
const strapi_1 = require("@strapi/strapi");
const defaultRouter = strapi_1.factories.createCoreRouter('api::pet.pet');
const customRouter = (innerRouter, extraRoutes = []) => {
    let routes;
    return {
        get prefix() {
            return innerRouter.prefix;
        },
        get routes() {
            if (!routes)
                routes = innerRouter.routes.concat(extraRoutes);
            // console.log(routes)
            return routes;
        },
    };
};
const myExtraRoutes = [
    {
        method: 'GET',
        path: '/pets/me/count',
        handler: 'api::pet.pet.count',
    },
    {
        method: 'GET',
        path: '/pets/checkout/webhook',
        handler: 'api::pet.pet.webhook',
    },
];
const allRoutes = customRouter(defaultRouter, myExtraRoutes);
exports.default = allRoutes;
