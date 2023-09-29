import { type SchemaTypeDefinition } from "sanity";
import { projects } from "./schemas";
import {
  about,
  display,
  projectDisplay,
  seo,
  tapeText,
} from "./schemas/objects";
import { home } from "./schemas/singletons";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    projects,
    // singletons
    home,
    // objects
    seo,
    display,
    about,
    tapeText,
    projectDisplay,
  ],
};
