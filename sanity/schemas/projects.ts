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
      name: "seo",
      type: "seo",
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
