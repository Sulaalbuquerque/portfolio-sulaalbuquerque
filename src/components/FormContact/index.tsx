
import SectionTitle from '../SectionTitle';
import { Container } from './styles';
import Form from './Form';

function FormContact() {
  return (
    <Container>
      <SectionTitle 
        title={
          <>
            Precisa dos meus serviços?
          </>
        }
        description={
          <>
            Preencha o formulário abaixo e
            <br/>
            retornarei em breve.
          </>
        }
      />

      <Form/>
    </Container>
  );
};

export default FormContact;
