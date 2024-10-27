// api/sanity.config.ts
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk'; // Required for Studio structure
import { visionTool } from '@sanity/vision'; // Optional: Useful for GROQ queries
import { schemaTypes } from './schemaTypes'; // Import your schema

export default defineConfig({
  name: 'default',
  title: 'client_demo',

  projectId: 'jyn0aimf', // Replace with your project ID
  dataset: 'production',

  basePath: '/admin', // Align with your custom subdomain setup

  plugins: [
    deskTool(), // Adds the default Studio tool
    visionTool(), // Optional: Enables the Vision tool for GROQ queries
  ],

  schema: {
    types: schemaTypes,
  },
});
