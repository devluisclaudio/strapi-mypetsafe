"use strict";
/**
 * pet service
 */
Object.defineProperty(exports, "__esModule", { value: true });
const strapi_1 = require("@strapi/strapi");
exports.default = strapi_1.factories.createCoreService('api::pet.pet', ({ strapi }) => ({
    async find(ctx) {
        const user = ctx.state.user;
        const pets = await strapi.entityService.findMany('api::pet.pet', {
            filters: {
                users_permissions_user: user.id,
            },
            populate: {
                especy: {
                    fields: [
                        'id',
                        'name',
                    ]
                },
                users_permissions_user: {
                    fields: [
                        'id',
                        'username',
                        'email'
                    ]
                },
                tutor_id: {
                    fields: [
                        'id',
                        'name_1',
                        'name_2'
                    ]
                },
                cover: true
            }
        });
        return pets;
    },
    async findOne(ctx) {
        const user = ctx.state.user;
        const pet = await strapi.entityService.findMany('api::pet.pet', {
            filters: {
                id: ctx.params.id,
                users_permissions_user: user.id,
            },
            populate: {
                especy: {
                    fields: [
                        'id',
                        'name',
                    ]
                },
                users_permissions_user: {
                    fields: [
                        'id',
                        'username',
                        'email'
                    ]
                },
                tutor_id: {
                    fields: [
                        'id',
                        'name_1',
                        'name_2'
                    ]
                },
                cover: true
            }
        });
        return pet;
    },
    async count(ctx) {
        const user = ctx.state.user;
        const pets = await strapi.entityService.findMany('api::pet.pet', {
            filters: {
                users_permissions_user: user.id,
            },
        });
        return pets.length;
    },
    async create(ctx) {
        const user = ctx.state.user;
        const { body, files } = ctx.request;
        const file = files['cover'];
        const tutor = await strapi.entityService.create('api::tutor.tutor', {
            data: {
                name_1: body.name_1,
                name_2: body.name_2,
                estado: body.uf,
                cidade: body.cidade
            }
        });
        const entry = await strapi.entityService.create('api::pet.pet', {
            data: {
                name: body.name,
                especy: body.especy,
                raca: body.raca,
                pelagemOrCor: body.pelagemCor,
                dateNascimento: body.nascimento,
                sexo: body.sexo,
                porte: body.porte,
                castrado: body.castrado,
                infoExtra: body.infoExtra,
                users_permissions_user: user.id,
                tutor_id: tutor.id,
                cover: null
            },
        });
        const createdFiles = await strapi.plugins.upload.services.upload.upload({
            data: {
                refId: entry.id,
                ref: "api::pet.pet",
                field: "cover",
                fileInfo: {
                    name: body.name,
                    caption: "Caption",
                    alternativeText: body.name + '-' + body.raca,
                },
            },
            files: file,
        });
        return entry;
    },
    async webhook(ctx) {
        const event = ctx.request.body;
        var body;
        var user;
        switch (event.type) {
            case 'charge.succeeded':
                body = event.data.object;
                user = await strapi.db.query('plugin::users-permissions.user').findOne({ where: { email: body.billing_details.email } });
                await strapi.entityService.create('api::ordem.ordem', {
                    data: {
                        paymentStripeId: body.id,
                        PaymentMethodStripeId: body.payment_method,
                        description: body.description,
                        amount: body.amount,
                        status: body.status,
                        credit: 1,
                        users_permissions_user: user.id
                    },
                });
                break;
            case 'payment_intent.payment_failed':
                body = event.data.object;
                user = await strapi.db.query('plugin::users-permissions.user').findOne({ where: { email: body.last_payment_error.payment_method.billing_details.email } });
                await strapi.entityService.create('api::ordem.ordem', {
                    data: {
                        paymentStripeId: body.id,
                        PaymentMethodStripeId: body.payment_method,
                        description: body.description,
                        amount: body.amount,
                        status: body.status,
                        credit: 0,
                        users_permissions_user: user.id
                    },
                });
                break;
            default:
        }
        return { received: true };
    }
}));
