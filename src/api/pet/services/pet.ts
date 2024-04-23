/**
 * pet service
 */

import { factories } from '@strapi/strapi';
import axios from "axios"
import uploadToLibrary from "../../../helpers/uploadStreamFile"


export default factories.createCoreService('api::pet.pet', ({ strapi }): {} => ({
    async find(ctx) {
        const user = ctx.state.user;
        const pets = await strapi.entityService.findMany(
            'api::pet.pet',
            {
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
                            'email']

                    },
                    tutor_id: {
                        fields: [
                            'id',
                            'name_1',
                            'name_2']

                    },
                    cover: true
                }
            }
        );


        return pets;
    },

    async findOne(ctx) {
        const user = ctx.state.user;
        const pet = await strapi.entityService.findMany(
            'api::pet.pet',
            {
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
                            'email']

                    },
                    tutor_id: {
                        fields: [
                            'id',
                            'name_1',
                            'name_2']

                    },
                    cover: true
                }
            }
        );


        return pet;
    },
    async count(ctx) {
        const user = ctx.state.user;
        const pets = await strapi.entityService.findMany(
            'api::pet.pet',
            {
                filters: {
                    users_permissions_user: user.id,
                },
            }
        );


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
                user = await strapi.db.query('plugin::users-permissions.user').findOne({ where: { email: body.billing_details.email } })
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
                user = await strapi.db.query('plugin::users-permissions.user').findOne({ where: { email: body.last_payment_error.payment_method.billing_details.email } })
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

        return { received: true }
    },

    async geradocs(ctx) {
        const user = ctx.state.user;
        const { body } = ctx.request;

        const entry = await strapi.entityService.findMany('api::ordem.ordem', {
            filters: {
                users_permissions_user: user.id,
                credit: true,
                description: {
                    $contains: body.type
                }

            },
        });



        if (entry.length > 0) {



            const pet = await strapi.entityService.findMany(
                'api::pet.pet',
                {
                    filters: {
                        id: body.petId,
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
                                'email']

                        },
                        tutor_id: {
                            fields: [
                                'id',
                                'name_1',
                                'name_2'],
                            populate: {
                                cidade: true,
                                estado: true
                            }
                        },
                        cover: true
                    }
                }
            );

            const url = 'https://n8n.mypetsafe.com.br/webhook/96a631c4-6d4c-4f97-9d61-d5c9b3cbc039'
            const result = await axios.post(url, pet,
                {
                    responseType: "stream"
                })

            const info = {
                name: body.type + '-' + body.petId + '.jpg'
            }

            const download = await strapi.entityService.create('api::download.download', {
                data: {
                    users_permissions_user: user.id,
                    pet: body.petId,
                    type: body.type,
                    cover: await uploadToLibrary(info, result)
                }
            })

            await strapi.entityService.update('api::ordem.ordem', entry[0].id, {
                data: { credit: false }
            })

            if (download.id)
                return { sucess: true, message: "Documentos gerados com sucesso!" };

            return { sucess: false, message: "Falha ao gerar documentos!" };
        } else {
            return { sucess: false, message: "Créditos insuficiente!" };
        }
    }
}));
