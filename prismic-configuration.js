import fetch from 'node-fetch';
import * as prismic from '@prismicio/client';

export const repoName = 'magnoliastudiopgh';
export const client = prismic.createClient(repoName, {
  accessToken: '',
  fetch,
  routes: [
    {
      type: 'home',
      path: '/',
    },
    {
      type: 'our_team',
      path: '/team',
    },
    {
      type: 'services',
      path: '/services',
    },
    {
      type: 'work',
      path: '/work',
    },
    {
      type: 'contact',
      path: '/contact',
    },
    {
      type: 'page',
      path: '/:uid',
    },
  ],
});
