// client/sanity.ts
import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: 'jyn0aimf', // Replace with your actual project ID
  dataset: 'production',
  useCdn: false, // Set to `true` for faster response times
  apiVersion: '2023-10-04', // Use current date for the latest API version
});

