/**
 * ordem router
 */

import { factories } from '@strapi/strapi';

const defaultRouter = factories.createCoreRouter('api::ordem.ordem');



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
        path: '/ordens/me/myorders',
        handler: 'api::ordem.ordem.me',
    },
    {
        method: 'GET',
        path: '/ordens/me/mycredits',
        handler: 'api::ordem.ordem.credits',
    }
];

const allRoutes = customRouter(defaultRouter, myExtraRoutes)

export default allRoutes;