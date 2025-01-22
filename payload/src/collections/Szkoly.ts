import type { CollectionConfig } from 'payload'

export const Szkoly: CollectionConfig = {
  slug: 'szkoly',
  fields: [
    {
      name: 'Nazwa',
      type: 'text',
    },
    {
        name: 'Lokalizacja',
        type: 'text',
    }
  ]
}