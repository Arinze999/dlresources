import { createClient } from 'contentful';

const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_DELIVERY_TOKEN;
const environment = process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT || 'master';

if (!space) {
  throw new Error('Missing CONTENTFUL_SPACE_ID');
}

if (!accessToken) {
  throw new Error('Missing CONTENTFUL_DELIVERY_TOKEN');
}

export const contentfulClient = createClient({
  space,
  accessToken,
  environment,
});
