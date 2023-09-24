import {
  Approach,
  Hero,
  Intro,
  Motto,
  Projects,
  Stripline,
} from "@/components/pages/home";
import { client } from "@/sanity/lib/client";
import { simpleProjectsQuery } from "@/sanity/lib/queries";
import { GetStaticProps, InferGetStaticPropsType } from "next";

export const getStaticProps: GetStaticProps = async () => {
  const projects = await client.fetch(simpleProjectsQuery);

  return {
    props: { projects },
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
