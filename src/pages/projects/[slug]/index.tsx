/*import { GetStaticPaths, GetStaticProps } from 'next';
import Prismic from '@prismicio/client';
import { useRouter } from 'next/router';
import Head from 'next/head';*/
import BannerProjeto from '../../../components/BannerProjeto';
import Header from '../../../components/Header';
/*import { getPrismicClient } from '../../../services/prismic';*/
import { ProjetoContainer } from '../../../styles/ProjetoStyles';
/*import LoadingScreen from '../../../components/LoadingScreen';*/
/*
interface IProjeto {
  slug: string;
  title: string;
  type: string;
  description: string;
  link: string;
  thumbnail: string;
}

interface ProjetoProps {
  projeto: IProjeto;
}
*/
export default function Projecto() {
  {/*const router = useRouter();
  if (router.isFallback) {
    return <LoadingScreen />;
  }*/}

  return (
    <ProjetoContainer>
      {/*<Head>
        <title>{projeto.title} | Meu portfólio</title>
        <meta name="description" content={projeto.description} />
        <meta property="og:image" content={projeto.thumbnail} />
        <meta property="og:image:secure_url" content={projeto.thumbnail} />
        <meta name="twitter:image" content={projeto.thumbnail} />
        <meta name="twitter:image:src" content={projeto.thumbnail} />
        <meta property="og:description" content={projeto.description} />
      </Head>*/}

      <Header />
      <BannerProjeto
        title='Projeto 01'
        type='Website'
        imgUrl='https://images.prismic.io/slicemachine-blank/dcea6535-f43b-49a7-8623-bf281aaf1cb2_roller-skating.png?auto=compress,format'
      />

      <main>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam ut distinctio natus vitae, delectus, aliquam facilis voluptates consectetur quod magni saepe exercitationem a sint totam corrupti nam harum eius quos.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam ut distinctio natus vitae, delectus, aliquam facilis voluptates consectetur quod magni saepe exercitationem a sint totam corrupti nam harum eius quos.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam ut distinctio natus vitae, delectus, aliquam facilis voluptates consectetur quod magni saepe exercitationem a sint totam corrupti nam harum eius quos.</p>
        <button type="button">
          <a href='#'>Ver projeto online</a>
        </button>
      </main>
    </ProjetoContainer>
  );
}
/*
export const getStaticPaths: GetStaticPaths = async () => {
  const prismic = getPrismicClient();
  const projetos = await prismic.query([
    Prismic.predicates.at('document.type', 'pro')
  ]);

  const paths = projetos.results.map(projeto => ({
    params: {
      slug: projeto.uid
    }
  }));

  return {
    paths,
    fallback: true
  };
};*/
/*
export const getStaticProps: GetStaticProps = async context => {
  const prismic = getPrismicClient();
  const { slug } = context.params;

  const response = await prismic.getByUID('pro', String(slug), {});

  const projeto = {
    slug: response.uid,
    title: response.data.title,
    type: response.data.type,
    description: response.data.description,
    link: response.data.link.url,
    thumbnail: response.data.thumbnail.url
  };

  return {
    props: {
      projeto
    },
    revalidate: 86400
  };
};*/