/**
 * localizacao router
 */

import { factories } from '@strapi/strapi';

const defaultRouter = factories.createCoreRouter('api::localizacao.localizacao');



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
        method: 'POST',
        path: '/pets/enviaLocalizacao',
        handler: 'api::localizacao.localizacao.saveLocalizacao',
    },
];

const allRoutes = customRouter(defaultRouter, myExtraRoutes)

export default allRoutes;