import { createClient } from '@insforge/sdk';

export const insforge = createClient({
  baseUrl: process.env.INSFORGE_BASE_URL || 'https://3vhnx7kt.us-east.insforge.app',
  anonKey: process.env.INSFORGE_ANON_KEY!
});
