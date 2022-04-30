import {
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiReact,
  SiAngularjs,
  SiNestjs
} from 'react-icons/si';
import { Title } from '../../components/typography'
import theme from '../../styles/theme/theme';
import { Container, ContainerWrapper, SubTitle, Wrapper } from './styles';

export default function Projects() {
  return (
    <Container>
      <Title title="Experiência Profissional" color={theme.colors.background} />
      <ContainerWrapper>
        <Wrapper>
          <div data-aos="fade-left" data-aos-duration="1500">
            <SubTitle> Desenvolvedor front-end </SubTitle>
            <h1> Infoshot </h1>
            <p> Atuei no desenvolvimento front-end na plataforma de inventariado do Eyet Trusted Software mapeando ativos da Microsoft pela Infoshot, </p>
            <p> Minhas funções foram de prototização, estilização e componentização utilizando Angular e tecnologias Microsoft Azure </p>
          </div>
          <div data-aos="fade-up-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1500"
          >
            <img src={'/nextjs-ssg-portfolio/infoshot_desktop_web.png'} />
            <h4> <SiAngularjs /> <SiTypescript /> </h4>
          </div>
        </Wrapper>
      </ContainerWrapper>
      <ContainerWrapper>
        <Wrapper>
          <div data-aos="fade-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1500"
          >
            <img src={'/nextjs-ssg-portfolio/zapt_tech_iphone_black.png'} />
            <h4> <SiNodedotjs /> <SiReact /> <SiJavascript /> </h4>
          </div>
          <div data-aos="fade-right" data-aos-duration="1500">
            <SubTitle> Estágio Full Stack </SubTitle>
            <h1> Zapt Tech </h1>
            <p> Desenvolvimento com React, Node.js e noSQL utilizando tecnologias de computação na nuvem Google Cloud como BigQuery, PubSub, etc... </p>
            <p> Minha função principal foi codificação no lado do cliente, desenvolver, projetar, implementar soluções UI, manutenção, melhorias, componentização de elementos</p>
          </div>
        </Wrapper>
      </ContainerWrapper>
      <ContainerWrapper >
        <Wrapper>
          <div data-aos="fade-left" data-aos-duration="1500">
            <SubTitle> Desenvolvedor Full Stack Jr </SubTitle>
            <h1> Be Truck </h1>
            <p> Atuei com o desenvolvimento de software de ponta a ponta, desde o levantamento de requisitos, codificação no lado do cliente e servidor, banco de dados, migração, testes, documentação, implementação usando melhores praticas em desenvolvimento </p>
            <p> Densevolvimento usando SOLID, TDD (Test Driven Developer), Docker, React, React Native, Nest.js, PostgreSQL e serviços cloud AWS</p>
          </div>
          <div data-aos="fade-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1500"
          >
            <img src={'/nextjs-ssg-portfolio/betruck_iphone_black_large.png'} />
            <h4> <SiNestjs /> <SiReact /> <SiTypescript /> </h4>
          </div>
        </Wrapper>
      </ContainerWrapper>
    </Container>
  );
}