define(function (require, exports, module) {
    module.exports = {
        env: {
            browser: true,
        },
        plugins: ["react"],
        extends: ["eslint:recommended", "plugin:react/recommended"],
        parser: "babel-eslint",
    };
});
