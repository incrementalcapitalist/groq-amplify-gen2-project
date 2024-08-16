import { defineBackend } from '@aws-amplify/backend';

export const api = defineBackend({
  type: 'api',
  definition: {
    routes: {
      '/groq': {
        function: {
          name: 'groqQuery'
        },
        methods: ['POST']
      }
    }
  }
});
