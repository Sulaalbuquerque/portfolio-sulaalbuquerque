
import SectionTitle from '../SectionTitle';
import { Container } from './styles';
import ExperiencesItem from './ExperiencesItem';

function Experiences() {
  return (
    <Container>
      <SectionTitle title='02 anos' description='de experiência'/>

      <section>
        <ExperiencesItem
          year='2021'
          title='Dev Front-end'
          description='Lorem ipsum dolor sit amet.'
        />
        <ExperiencesItem
          year='2021'
          title='Dev Front-end'
          description='Lorem ipsum dolor sit amet.'
        />
        <ExperiencesItem
          year='2021'
          title='Dev Front-end'
          description='Lorem ipsum dolor sit amet.'
        />
        <ExperiencesItem
          year='2021'
          title='Dev Front-end'
          description='Lorem ipsum dolor sit amet.'
        />
      </section>
    </Container>
  );
};

export default Experiences;
