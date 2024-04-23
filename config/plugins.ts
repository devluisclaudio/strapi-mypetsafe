export default () => ({
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
