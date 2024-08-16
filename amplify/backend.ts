import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource.js';
import { data } from './data/resource.js';
import { function as groqQueryFunction } from './functions/groqQuery/resource.js';
import { api } from './api/resource.js';

export const backend = defineBackend({
  auth,
  data,
  api,
  groqQuery: groqQueryFunction
});
