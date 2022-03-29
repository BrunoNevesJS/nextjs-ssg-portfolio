import { Container, TextContainer, InfosContainer, CodeItem, TextItem } from './styles';
import Animation from '../animation'
import TextLoop from 'react-text-loop/lib/components/TextLoop';

export default function Home() {
  const NEXT_BASE_PATH = process.env.NEXT_BASE_PATH || ''

  const calculateAge = (bornYear: number): number => {
    return new Date().getFullYear() - bornYear;
  }

  return (
    <>
      <Container data-aos="fade-up">
        <div>
          <TextContainer>
            <TextItem>
              <h1>Olá</h1>
              <h2>Me chamo Bruno,</h2>
              <h2>Sou {""}
                <TextLoop>
                  <span className="highlight">Desenvolvedor</span>
                  <span className="highlight">Programador</span>
                  <span className="highlight">Full Stack</span>
                </TextLoop>
              </h2>
            </TextItem>
          </TextContainer>
          <InfosContainer>
            <CodeItem data-aos="zoom-in">
              <span className="comment">{`//Meu perfil`}</span>
              <span className="purple">Profile</span> {'\u007B'}
              <div>
                Nome: <span className="blue">Bruno Neves</span>,
              </div>
              <div>
                Idade: <span className="blue">{calculateAge(1997)}</span>,
              </div>
              <div>
                Local: 
                {'\u007B'}
                <div>
                  Cidade: <span className="blue">Belo Horizonte</span>, <br />
                  Estado: <span className="blue">Minas Gerais</span>, <br />
                  País: <span className="blue">Brasil</span>,
                </div>
                {'\u007D'},
              </div>
              {'\u007D'}
            </CodeItem>
          </InfosContainer>
        </div>
        <Animation path={`${NEXT_BASE_PATH.concat('/web-developer.json')}`} />
      </Container>
    </>
  );
}