import js from "@eslint/js";

export default [
    js.configs.recommended,

    {
        files: ["**/*.js"],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "commonjs",
        },
        rules: {
            "no-unused-vars": "warn",
            "no-console": "off",
        },
    },

    {
        files: ["**/*.test.js"],
        rules: {
            "no-undef": "off",
        },
    },
];
