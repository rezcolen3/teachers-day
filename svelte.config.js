import vercel from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/kit/vite/preprocess.js';

export default {
  preprocess: vitePreprocess(),
  kit: {
    adapter: vercel()
  }
};
