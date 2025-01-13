"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = () => ({
    upload: {
        config: {
            provider: "local",
            providerOptions: {
                localServer: {
                    maxage: 300000
                },
            },
        },
    },
});
