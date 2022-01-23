import SectionTitle from '../SectionTitle';
import ProjectItem from './ProjectsItem';
import { Container } from './styles';
/*import ProjectItem from './ProjectsItem';*/
import Link from 'next/link'


function Projects() {
  return (
    <Container>
      <SectionTitle title='Últimos projetos'/>

      <section>
        <ProjectItem
          title='Projeto 01' 
          type='Website' 
          slug='teste' 
          img='https://images.prismic.io/slicemachine-blank/dcea6535-f43b-49a7-8623-bf281aaf1cb2_roller-skating.png?auto=compress,format'
        />
        <ProjectItem
          title='Projeto 02' 
          type='Website' 
          slug='teste' 
          img='https://images.prismic.io/slicemachine-blank/dcea6535-f43b-49a7-8623-bf281aaf1cb2_roller-skating.png?auto=compress,format'
        />
        <ProjectItem
          title='Projeto 03' 
          type='Website' 
          slug='teste' 
          img='https://images.prismic.io/slicemachine-blank/dcea6535-f43b-49a7-8623-bf281aaf1cb2_roller-skating.png?auto=compress,format'
        />
        
      </section>
      <button type='button'>
        <Link href='/projetos'>
          <a>Ver todos os projetos</a>
        </Link>
      </button>
    </Container>
  );
};

export default Projects;
