import { GetServerSidePropsContext } from "next";

import Head from "@infra/Head";

import { getGeo } from "@utils/getGeo";

import Content from "@components/Content";
import Footer from "@components/Footer";
import Header from "@components/Header";

type PageProps = {
  city: string;
  discount: boolean;
};

export default ({ city }: PageProps) => (
  <>
    <Head title="Bem Estar - Novo ativo liberado pela Anvisa: Óleo de rosa mosqueta, extraído das sementes da planta rosa canina com tecnologia Europeia, para o combate do envelhecimento da pele chega ao Brasil | Podcast | G1" />

    <Header />

    <Content city={city} />

    <Footer />
  </>
);

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const data = await getGeo(ctx);

  return {
    props: {
      city: data.city,
    },
  };
};
