import { defineField, defineType } from "sanity";

// schemas/siteSettings.js
export default defineType({
  name: "projects",
  title: "Projects",
  type: "document",
  groups: [
    {
      name: "page",
      title: "Page",
    },
    {
      name: "seo",
      title: "SEO",
    },
  ],
  fields: [
    {
      title: "SEO",
      name: "seo",
      type: "object",
      fields: [
        defineField({ name: "title", type: "string" }),
        defineField({
          name: "description",
          type: "text",
        }),
        defineField({
          name: "keywords",
          title: "Keywords",
          type: "string",
        }),
        defineField({
          name: "image",
          title: "Image",
          type: "image",
          options: {
            hotspot: true,
          },
        }),
      ],
      group: "seo",
    },
    {
      name: "title",
      title: "Title",
      type: "string",
      group: "page",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
      },
      validation: (rule: any) => rule.required(),
      group: "page",
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
      group: "page",
    },
    {
      name: "body",
      title: "Body",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
          fields: [
            {
              type: "string",
              name: "alt",
              title: "Alternative text",
              description: `Some of your visitors cannot see images, 
              be they blind, color-blind, low-sighted; 
              alternative text is of great help for those 
              people that can rely on it to have a good idea of 
              what\'s on your page.`,
              options: {
                isHighlighted: true,
              },
            },
          ],
        },
      ],
      group: "page",
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "mainImage",
    },
    prepare(selection) {
      return { ...selection };
    },
  },
});
