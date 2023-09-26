import { InlineElementIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "projectDisplay",
  title: "Project Display",
  type: "object",
  icon: InlineElementIcon as any,
  fields: [
    defineField({
      name: "projectList",
      title: "Project List",
      type: "array",
      of: [
        {
          title: "Project",
          name: "project",
          type: "reference",
          to: [{ type: "projects" }],
          preview: {
            select: {
              title: "project",
            },
            prepare({ title }) {
              console.log("projk", title);
              return {
                title: "title",
              };
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      project0: "projectList.0.title",
      project1: "projectList.1.title",
      project2: "projectList.2.title",
      project3: "projectList.3.title",
      project4: "projectList.4.title",
    },
    prepare({ project0, project1, project2, project3, project4 }) {
      const projects = [project0, project1, project2, project3].filter(Boolean);
      const title = projects.length > 0 ? `${projects.join(", ")}` : "";
      const hasMoreAuthors = Boolean(project4);

      return {
        title: hasMoreAuthors ? `${title}…` : title,
      };
    },
  },
});
