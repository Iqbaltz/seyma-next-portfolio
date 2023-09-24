import { type SchemaTypeDefinition } from "sanity";
import { projects } from "./schemas";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [projects],
};
