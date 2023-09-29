import { OverageIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "tapeText",
  title: "Tape Text",
  type: "object",
  icon: OverageIcon as any,
  fields: [
    defineField({
      title: "text",
      name: "text",
      type: "string",
    }),
    defineField({
      title: "icon",
      name: "icon",
      type: "image",
    }),
  ],
});
