import {
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiReact,
  SiAngularjs,
  SiCss3,
  SiHtml5
} from 'react-icons/si';
import Icon from '../../components/icon';
import { Title } from '../../components/typography'
import theme from '../../styles/theme/theme';
import { Container } from './styles';

export default function Skills() {
  return (
    <Container>
      <Title title="Conhecimentos" color={theme.colors.background} />
      <section>
        <Icon title="HTML" icon={<SiHtml5 />} />
        <Icon title="CSS" icon={<SiCss3 />} />
        <Icon title="Typescript" icon={<SiTypescript />} />
        <Icon title="Javascript" icon={<SiJavascript />} />
      </section>
      <section>
        <Icon title="Node.js" icon={<SiNodedotjs />} />
        <Icon title="React" icon={<SiReact />} />
        <Icon title="Angular" icon={<SiAngularjs />} />
      </section>
    </Container>
  );
}