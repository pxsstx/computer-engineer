import { CATEGORIES } from '../src/data/categories.ts';
import { defineConfig } from 'tinacms';

const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || 'main';
const clientId = process.env.TINA_CLIENT_ID;
const token = process.env.TINA_TOKEN;

export default defineConfig({
  branch,
  clientId, // Environment variable for clientId
  token,    // Environment variable for token

  build: {
    outputFolder: 'admin',
    publicFolder: 'public'
  },
  media: {
    tina: {
      mediaRoot: '/src/assets/images',
      publicFolder: ''
    }
  },
  schema: {
    collections: [
      {
        name: 'post',
        label: 'Blog Post',
        path: 'src/content/blog',
        format: 'mdx',
        fields: [
          {
            type: 'image',
            label: 'Cover Image',
            required: true,
            name: 'heroImage',
            description: 'The image used for the cover of the post'
          },
          {
            type: 'string',
            required: true,
            name: 'category',
            label: 'Category',
            description: 'Select a category for this post',
            options: [...CATEGORIES]
          },
          {
            type: 'string',
            label: 'Description',
            required: true,
            name: 'description',
            description: 'A short description of the post'
          },
          {
            type: 'datetime',
            name: 'pubDate',
            label: 'Publication Date',
            required: true
          },
          {
            name: 'draft',
            label: 'Draft',
            type: 'boolean',
            description: 'If this is checked, the post will not be published'
          },
          {
            type: 'string',
            name: 'tags',
            required: true,
            label: 'Tags',
            description: 'Tags for this post',
            list: true,
            ui: {
              component: 'tags'
            }
          },
          {
            type: 'string',
            name: 'title',
            label: 'Title',
            isTitle: true,
            required: true
          },
          {
            type: 'rich-text',
            label: 'Body',
            name: 'SButton',
            isBody: true,
            templates: [
              {
                label: 'SButton',
                name: 'SButton',
                fields: [
                  {
                    type: 'rich-text',
                    label: 'SButton',
                    name: 'children',
                    isBody: true
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
});
