import { groq } from "next-sanity";

export const projectsQuery = groq`
  *[_type == "projects"]
`;

export const simpleProjectsQuery = groq`
  *[_type == "projects"] | order(_createdAt desc) {
    mainImage,
    slug,
    title
  }
`;
