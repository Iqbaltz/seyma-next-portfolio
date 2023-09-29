import { defineField, defineType } from "sanity";

export default defineType({
  name: "home",
  title: "Home",
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
    defineField({
      name: "homeSeo",
      type: "seo",
      group: "seo",
    }),
    defineField({
      name: "sections",
      title: "Sections",
      type: "array",
      of: [
        {
          title: "Display",
          type: "display",
        },
        {
          title: "About",
          type: "about",
        },
        {
          title: "Tape Line",
          type: "tapeText",
        },
        {
          title: "Project Display",
          type: "projectDisplay",
        },
      ],
      group: "page",
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Content for Homepage",
        subtitle: "Content for homepage",
      };
    },
  },
});
