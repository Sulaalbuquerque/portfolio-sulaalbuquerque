import SectionTitle from '../SectionTitle';
import { Container } from './styles';
import Form from './Form';

function FormContact() {
  return (
    <Container>
      <SectionTitle
        title={<>Precisa de um dev front-end?</>}
        description={
          <>
            Preencha o formulário abaixo e
            <br />
            retornarei em breve.
          </>
        }
      />

      <Form />
    </Container>
  );
}

export default FormContact;
