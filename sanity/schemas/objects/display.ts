import { BlockElementIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export default defineType({
  title: "Display",
  name: "display",
  type: "object",
  icon: BlockElementIcon as any,
  fields: [
    {
      title: "Layout Type",
      name: "layoutType",
      type: "string",
      options: {
        list: [
          { title: "Hero", value: "hero" },
          { title: "Philosophy", value: "philosophy" },
          { title: "Approach", value: "approach" },
        ],
        layout: "radio",
        direction: "horizontal",
      },
      initialValue: "hero",
    },
    defineField({ title: "Title 1", name: "title1", type: "string" }),
    defineField({ title: "Title 2", name: "title2", type: "string" }),
    defineField({
      title: "Title 3",
      name: "title3",
      type: "string",
      hidden: ({ parent }: any) => parent?.layoutType == "approach",
    }),
    defineField({
      title: "Title 4",
      name: "title4",
      type: "string",
      hidden: ({ parent }: any) =>
        ["hero", "approach"].includes(parent?.layoutType),
    }),
    defineField({ title: "Description", name: "description", type: "text" }),
    defineField({
      title: "Image",
      name: "image",
      type: "image",
      options: { hotspot: true },
      hidden: ({ parent }: any) => parent.layoutType != "approach",
    }),
  ],
  preview: {
    select: {
      title1: "title1",
      title2: "title2",
      title3: "title3",
      title4: "title4",
    },
    prepare({ title1, title2, title3, title4 }) {
      return {
        title: `${title1} ${title2} ${title3 ?? ""} ${title4 ?? ""}`,
      };
    },
  },
});
