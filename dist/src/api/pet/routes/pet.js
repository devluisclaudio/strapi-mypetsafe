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
        method: 'POST',
        path: '/pets/checkout/webhook',
        handler: 'api::pet.pet.webhook',
    },
    {
        method: 'POST',
        path: '/pets/me/geradocs',
        handler: 'api::pet.pet.geradocs',
    },
    {
        method: 'POST',
        path: '/pets/me/getCodePet',
        handler: 'api::pet.pet.getCodePet',
    },
    {
        method: 'PUT',
        path: '/pets/me/update/:id',
        handler: 'api::pet.pet.updatePet',
    },
];
const allRoutes = customRouter(defaultRouter, myExtraRoutes);
exports.default = allRoutes;
