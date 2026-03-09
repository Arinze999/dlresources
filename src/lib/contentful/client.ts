import { createClient } from 'contentful';

const space = process.env.CONTENTFUL_SPACE_ID;
const accessToken = process.env.CONTENTFUL_DELIVERY_TOKEN;
const environment = process.env.CONTENTFUL_ENVIRONMENT || 'master';

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