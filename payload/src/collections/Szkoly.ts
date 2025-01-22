import type { CollectionConfig } from 'payload';

export const Szkoly: CollectionConfig = {
  slug: 'szkoly',
  fields: [
    {
      name: 'nazwa',
      type: 'text',
    },
    {
      name: 'lokalizacja',
      type: 'text',
    },
  ],
  access: {
    create: ({ req }) => {
      // Example: Allow all users to create
      return true;
    },
    read: ({ req }) => {
      // Example: Allow all users to read
      return true;
    },
    update: ({ req }) => {
      // Example: Restrict updates to admin users only
      return true;
    },
    delete: ({ req }) => {
      // Example: Restrict deletion to admin users only
      return true;
    },

    // For auth-enabled collections only
    admin: ({ req }) => {
      // Example: Restrict admin access to admin users only
      return true;
    },
    unlock: ({ req }) => {
      // Example: Allow unlocking only for admin users
      return true;
    },

    // For version-enabled collections only
    readVersions: ({ req }) => {
      // Example: Allow version reads for all users
      return true;
    },
  },
};
