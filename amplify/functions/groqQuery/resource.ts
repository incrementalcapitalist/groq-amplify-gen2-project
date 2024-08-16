import { defineBackend } from '@aws-amplify/backend';

export const groqQueryFunction = defineBackend({
  type: 'function',
  definition: {
    name: 'groqQuery',
    entry: 'index.ts'
  }
});
