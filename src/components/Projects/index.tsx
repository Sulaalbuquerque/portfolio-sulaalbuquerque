import Link from 'next/link';
import SectionTitle from '../SectionTitle';
import ProjectItem from './ProjectsItem';
import { Container } from './styles';

interface IProjeto {
  slug: string;
  title: string;
  type: string;
  description: string;
  link: string;
  thumbnail: string;
}

interface ProjetosProps {
  projetos: IProjeto[];
}

function Projects({ projetos }: ProjetosProps) {
  return (
    <Container>
      <SectionTitle title="Últimos projetos" />

      <section>
        {projetos.slice(0, 3).map(projeto => (
          <ProjectItem
            key={projeto.slug}
            title={projeto.title}
            type={projeto.type}
            slug={projeto.slug}
            img={projeto.thumbnail}
          />
        ))}
      </section>
      <button type="button">
        <Link href="/projects">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a>Ver todos os projetos</a>
        </Link>
      </button>
    </Container>
  );
}

export default Projects;
