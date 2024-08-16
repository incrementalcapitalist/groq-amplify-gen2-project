import { defineApi } from '@aws-amplify/backend';

export const api = defineApi({
  routes: {
    '/groq': {
      function: {
        name: 'groqQuery'
      },
      methods: ['POST']
    }
  }
});
