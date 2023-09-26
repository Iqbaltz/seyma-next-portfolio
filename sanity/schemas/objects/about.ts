import { BookIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "about",
  title: "About",
  type: "object",
  icon: BookIcon as any,
  fields: [
    defineField({
      title: "Image",
      name: "image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "text",
      title: "Text",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
    }),
    defineField({
      name: "cta",
      type: "object",
      title: "Call to Action",
      fields: [
        {
          name: "text",
          title: "Text",
          type: "string",
        },
        {
          name: "link",
          title: "Link",
          type: "string",
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "text",
    },
    prepare({ title }) {
      return {
        title: title[0] + " " + title[1],
      };
    },
  },
});
