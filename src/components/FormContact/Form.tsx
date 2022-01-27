import { FormContainer, Input, TextArea } from './styles'
import { useState } from 'react';
import { sendContactMail } from '../../services/sendMail';

export default function Form () {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState('');

    async function handleSubmit(event) {
        event.preventDefault();
    /*
        if (!nome || !email || !mensagem) {
          toast('Preencha todos os campos para enviar sua mensagem!', {
            style: {
              background: theme.error,
              color: '#fff'
            }
          });
          return;
        }
    */
        try {
          /*setLoading(true);*/
          await sendContactMail(nome, email, mensagem);
          setNome('');
          setEmail('');
          setMensagem('');
    /*
          toast('Mensagem enviada com sucesso!', {
            style: {
              background: theme.secondary,
              color: '#fff'
            }
          });*/
        } catch (error) {
          /*toast('Ocorreu um erro ao tentar enviar sua mensagem. Tente novamente!', {
            style: {
              background: theme.error,
              color: '#fff'
            }
            
          });*/
          console.log(error)
        }/* finally {
          setLoading(false);
        }*/
      }
    

    return (
        <FormContainer data-aos='fade-up' onSubmit={handleSubmit}>
            <Input 
                placeholder='Nome' 
                value={nome}
                onChange={({ target }) => setNome(target.value)}
            />
            <Input 
                placeholder='E-mail' 
                type='email' 
                value={email}
                onChange={({ target }) => setEmail(target.value)}
            />
            <TextArea 
                placeholder='Mensagem' 
                value={mensagem}
                onChange={({ target }) => setMensagem(target.value)}
            />
            <button type='submit'>Enviar</button>
        </FormContainer>
    )
}