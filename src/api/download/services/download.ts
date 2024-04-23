/**
 * download service
 */

import { factories } from '@strapi/strapi';
import download from '../controllers/download';
import axios from "axios"

export default factories.createCoreService('api::download.download',
    ({ strapi }): {} => ({
        async find(ctx) {
            const user = ctx.state.user;
            const donload = await strapi.entityService.findMany('api::download.download', {
                filters: {
                    users_permissions_user: user.id,
                },
                populate: {
                    users_permissions_user: {
                        fields: [
                            'id',
                            'username',
                            'email']

                    },
                    pet: {
                        fields: [
                            'id',
                            'name',
                            'code'
                            ]

                    },
                    cover: {
                        fields: [
                            'id',
                            'name',
                            ]
                    }
                }
            })

            return donload
        },
        async findOne(ctx) {
            const download = await strapi.entityService.findMany('api::download.download', {
                populate: {
                    users_permissions_user: {
                        fields: [
                            'id',
                            'username',
                            'email']

                    },
                    pet: {
                        fields: [
                            'id',
                            'name',
                            ],
                        filters: {
                            code: ctx.params.id,
                        }
                    },
                    cover:  {
                        fields: [
                            'id',
                            'name',
                            'url'
                            ]
                    }
                }
            })
            return download
        }
    })
);
