import { defineFunction } from '@aws-amplify/backend';

export const groqQueryFunction = defineFunction({
  name: 'groqQuery',
  entry: 'index.ts'
});