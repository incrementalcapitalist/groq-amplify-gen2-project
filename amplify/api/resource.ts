import { defineBackend } from '@aws-amplify/backend';

const api = defineBackend({
  type: 'api',
  definition: {
    routes: {
      '/groq': {
        type: 'function',
        function: {
          name: 'groqQuery'
        },
        methods: ['POST']
      }
    }
  }
});

export { api };