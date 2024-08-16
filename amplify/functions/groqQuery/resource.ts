import { defineFunction, Permissions } from '@aws-amplify/backend';
import { Function } from '@aws-amplify/backend-cli';

export const groqQueryFunction = defineFunction({
  name: 'groqQuery',
  handler: 'index.handler',
  runtime: Function.Runtime.NODEJS_18,
  entrypoint: 'index.ts',
  permissions: [
    Permissions.custom('groqQueryLambdaPolicy')
  ]
});
