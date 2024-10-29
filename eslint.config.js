import { defineConfig } from 'eslint-define-config';

export default defineConfig({
    parser: '@typescript-eslint/parser',
    extends: [
        "@rocketseat/eslint-config/node"
    ],
    rules: {
        // suas regras personalizadas
    },
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            // regras específicas para TypeScript, se necessário
        },
    ],
});
