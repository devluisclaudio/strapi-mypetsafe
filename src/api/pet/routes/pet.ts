/**
 * pet router
 */

import { factories } from '@strapi/strapi';
const defaultRouter = factories.createCoreRouter('api::pet.pet');



const customRouter = (innerRouter, extraRoutes = []) => {
    let routes;
    return {
        get prefix() {
            return innerRouter.prefix;
        },
        get routes() {
            if (!routes) routes = innerRouter.routes.concat(extraRoutes);

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
];

const allRoutes = customRouter(defaultRouter, myExtraRoutes)

export default allRoutes;
