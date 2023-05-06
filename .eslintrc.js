module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        '@vue/eslint-config-typescript',
    ],
    rules: {
        'vue/multi-word-component-names': 'off',
        semi: [2, 'never'],
        indent: ['error', 4],
        'vue/html-indent': ['error', 4]
    },
}
