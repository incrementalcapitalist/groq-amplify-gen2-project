import { defineApi } from '@aws-amplify/backend';

export const api = defineApi({
  routes: {
    '/groq': {
      type: 'function',
      function: {
        name: 'groqQuery'
      },
      methods: ['POST']
    }
  }
});