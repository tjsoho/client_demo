import {defineType as t, defineField as e, defineConfig as i, renderStudio as a} from 'sanity'
import {deskTool as n} from 'sanity/desk'
import {visionTool as o} from '@sanity/vision'
const m = t({
    name: 'homePage',
    title: 'Home Page',
    type: 'document',
    fields: [
      e({name: 'title', title: 'Title', type: 'string'}),
      e({name: 'description', title: 'Description', type: 'text'}),
      e({
        name: 'sections',
        title: 'Sections',
        type: 'array',
        of: [
          {
            name: 'section1',
            type: 'object',
            fields: [
              {name: 'heading', title: 'Heading', type: 'string'},
              {name: 'subheading', title: 'Subheading', type: 'string'},
              {name: 'paragraph', title: 'Text', type: 'text'},
              {name: 'image', title: 'Image', type: 'image', options: {hotspot: !0}},
            ],
          },
          {
            name: 'section2',
            type: 'object',
            fields: [
              {name: 'heading', title: 'Heading', type: 'string'},
              {name: 'subheading', title: 'Subheading', type: 'string'},
              {name: 'paragraph', title: 'Text', type: 'text'},
              {name: 'image', title: 'Image', type: 'image', options: {hotspot: !0}},
            ],
          },
          {
            name: 'section3',
            type: 'object',
            fields: [
              {name: 'galleryTitle', title: 'Gallery Title', type: 'string'},
              {name: 'images', title: 'Images', type: 'array', of: [{type: 'image'}]},
            ],
          },
          {
            name: 'section4',
            type: 'object',
            fields: [
              {name: 'heading', title: 'Heading', type: 'string'},
              {name: 'paragraph', title: 'Text', type: 'text'},
            ],
          },
        ],
      }),
    ],
  }),
  l = t({
    name: 'aboutPage',
    title: 'About Page',
    type: 'document',
    fields: [
      e({name: 'title', title: 'Page Title (For internal use only)', type: 'string'}),
      e({
        name: 'sections',
        title: 'Sections',
        type: 'array',
        of: [
          {
            name: 'section1',
            type: 'object',
            fields: [
              {name: 'heading', title: 'Heading', type: 'string'},
              {name: 'subheading', title: 'Subheading', type: 'string'},
              {name: 'text', title: 'Text', type: 'text'},
              {name: 'image', title: 'Image', type: 'image', options: {hotspot: !0}},
            ],
          },
          {
            name: 'section2',
            type: 'object',
            fields: [
              {name: 'teamSectionTitle', title: 'Team Section Title', type: 'string'},
              {
                name: 'teamMembers',
                title: 'Team Members',
                type: 'array',
                of: [
                  {
                    name: 'teamMember',
                    type: 'object',
                    fields: [
                      {name: 'name', title: 'Name', type: 'string'},
                      {name: 'role', title: 'Role', type: 'string'},
                      {name: 'image', title: 'Image', type: 'image'},
                    ],
                  },
                ],
              },
            ],
          },
          {
            name: 'section3',
            type: 'object',
            fields: [
              {name: 'heading', title: 'Heading', type: 'string'},
              {name: 'text', title: 'Text', type: 'text'},
            ],
          },
        ],
      }),
    ],
  }),
  s = t({
    name: 'servicesPage',
    title: 'Services Page',
    type: 'document',
    fields: [
      e({name: 'heroSection', title: 'Hero Section', type: 'string'}),
      e({
        name: 'services',
        title: 'Services',
        type: 'array',
        of: [
          {
            name: 'service',
            type: 'object',
            fields: [
              {name: 'title', title: 'Service Title', type: 'string'},
              {name: 'description', title: 'Service Description', type: 'text'},
            ],
          },
        ],
      }),
    ],
  }),
  p = t({
    name: 'blogPage',
    title: 'Blog Page',
    type: 'document',
    fields: [
      e({name: 'title', title: 'Title', type: 'string'}),
      e({
        name: 'posts',
        title: 'Posts',
        type: 'array',
        of: [{type: 'reference', to: [{type: 'blogPost'}]}],
      }),
    ],
  }),
  g = t({
    name: 'blogPost',
    title: 'Blog Post',
    type: 'document',
    fields: [
      e({name: 'title', title: 'Title', type: 'string'}),
      e({name: 'author', title: 'Author', type: 'string'}),
      e({name: 'content', title: 'Content', type: 'array', of: [{type: 'block'}]}),
      e({name: 'publishedAt', title: 'Published At', type: 'datetime'}),
      e({name: 'mainImage', title: 'Main Image', type: 'image'}),
    ],
  }),
  r = t({
    name: 'contactPage',
    title: 'Contact Page',
    type: 'document',
    fields: [
      e({name: 'title', title: 'Title', type: 'string'}),
      e({
        name: 'contactInfo',
        title: 'Contact Information',
        type: 'object',
        fields: [
          {name: 'phone', title: 'Phone', type: 'string'},
          {name: 'email', title: 'Email', type: 'string'},
        ],
      }),
    ],
  }),
  y = [m, l, s, p, g, r],
  c = i({
    name: 'default',
    title: 'SanityBoilerPlate',
    projectId: 'jyn0aimf',
    dataset: 'production',
    basePath: '/admin',
    plugins: [n(), o()],
    schema: {types: y},
  })
a(document.getElementById('sanity'), c, {reactStrictMode: !1, basePath: '/'})
