import { defineField, defineType } from "sanity";

export default defineType({
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
});
