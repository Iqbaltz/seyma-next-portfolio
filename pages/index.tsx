import {
  Approach,
  Hero,
  Intro,
  Motto,
  Projects,
  Stripline,
} from "@/components/pages/home";
import { readToken } from "@/sanity/env";
import { client } from "@/sanity/lib/client";
import { simpleProjectsQuery } from "@/sanity/lib/queries";
import { GetStaticProps, InferGetStaticPropsType } from "next";

export const getStaticProps: GetStaticProps = async ({ draftMode = false }) => {
  const projects = await client.fetch(simpleProjectsQuery);

  return {
    props: { draftMode, projects, token: draftMode ? readToken : "" },
  };
};

export default function Home({
  projects,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Hero />
      <Intro />
      <Motto />
      <Stripline />
      <Projects data={projects} />
      <Approach />
    </>
  );
}
