module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "jest": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "plugin:storybook/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint/eslint-plugin",
        "react"
    ],
    "settings": {
        "react": {
            "version": "detect"
        }
    },
    "root": true,
    "rules": {
        "indent": ["warn", 4],
        "linebreak-style": "off",
        "quotes": "off",
        "semi": "off",
        "no-unused-vars": ["off", { "argsIgnorePattern": "^_" }],
        "@typescript-eslint/no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }],
        "react/react-in-jsx-scope": "off",
        "react/prop-types": "off",
        "max-len": ["error", { "ignoreComments": true, "code": 120 }],
        "@typescript-eslint/ban-ts-comment": ["error", { "ts-ignore"
        : "allow-with-description" }],
    }
}
