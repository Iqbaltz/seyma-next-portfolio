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
import { urlForImage } from "@/sanity/lib/image";
import { homeQuery } from "@/sanity/lib/queries";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { useLiveQuery } from "next-sanity/preview";
import Head from "next/head";

export const getStaticProps: GetStaticProps = async ({ draftMode = false }) => {
  const homeData = await client.fetch(homeQuery);

  return {
    props: { draftMode, homeData, token: draftMode ? readToken : "" },
  };
};

export default function Home({
  homeData,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [home] = useLiveQuery(homeData, homeQuery);
  console.log(home);
  const { homeSeo } = home;

  const componentMap: any = {
    display: {
      hero: (data: any) => <Hero data={data} key={data?._key} />,
      philosophy: (data: any) => <Motto data={data} key={data?._key} />,
      approach: (data: any) => <Approach data={data} key={data?._key} />,
    },
    about: (data: any) => <Intro data={data} key={data?._key} />,
    tapeText: (data: any) => <Stripline data={data} key={data?._key} />,
    projectDisplay: (data: any) => (
      <Projects data={data?.projectList} key={data?._key} />
    ),
  };

  const renderSections = (sections: any) =>
    sections.map((data: any) => {
      const component = componentMap[data?._type] || null;

      if (component) {
        if (data?.layoutType) {
          return component[data.layoutType](data) || null;
        }
        return component(data);
      }
    });
  return (
    <>
      <Head>
        <title>{homeSeo?.title}</title>
        <meta name="description" content={homeSeo?.description} />
        <meta name="keywords" content={homeSeo?.keywords} />
        <meta
          property="og:image"
          content={homeSeo?.image ? urlForImage(homeSeo?.image)?.url() : ""}
        />
      </Head>
      {renderSections(home?.sections)}
    </>
  );
}
