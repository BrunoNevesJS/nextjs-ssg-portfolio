import { useCallback, useMemo, useState } from 'react';
import { Container, Label, Wrapper } from './styles';
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    ResponsiveContainer,
    PieChart,
    Pie,
    Tooltip,
    PieLabelRenderProps
} from 'recharts';

const data = [
    { subject: 'FRONT-END', value: 100 },
    { subject: 'BACK-END', value: 70 },
    { subject: 'MOBILE', value: 80 },
    { subject: 'BANCO DE DADOS', value: 80 },
    { subject: 'TESTES', value: 80 },
];

const frontend = [
    { name: 'React.js', value: 60 },
    { name: 'Angular', value: 30 },
    { name: 'AngularJS', value: 10 },
];

const backend = [
    { name: 'Node.js', value: 60 },
    { name: 'Nest', value: 40 },
];

const mobile = [
    { name: 'React Native', value: 60 },
    { name: 'Ionic', value: 20 },
    { name: 'React Cordova', value: 20 },
];

const bd = [
    { name: 'PostgreSQL', value: 33 },
    { name: 'MySQL', value: 33 },
    { name: 'MongoDB', value: 33 },
];

const testes = [
    { name: 'Jest', value: 70 },
    { name: 'React Testing Library', value: 30 }
];

export default function Charts() {
    const [activeIndex, setActiveIndex] = useState<string>()

    const onMouseOver = useCallback((data) => {
        if (data?.activeLabel) setActiveIndex(data?.activeLabel);
    }, []);

    const pieChart = useMemo(() => {

        switch (activeIndex) {
            case 'FRONT-END':
                return frontend;
            case 'BACK-END':
                return backend;
            case 'MOBILE':
                return mobile;
            case 'BANCO DE DADOS':
                return bd;
            case 'TESTES':
                return testes;
        }
    }, [activeIndex]);

    const labelPie = ({
        x, y, name
    }: PieLabelRenderProps): JSX.Element => {
        return (
            <text x={x} y={y} fill="black">
                {name}
            </text>
        );
    };

    return (
        <Container>
            <Wrapper activeIndex={!!activeIndex}>
                <div data-aos="fade-right">
                    <ResponsiveContainer height={300}>
                        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data} onMouseMove={onMouseOver}>
                            <PolarGrid />
                            <PolarAngleAxis dataKey="subject" />
                            <PolarRadiusAxis />
                            <Radar dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} style={{ cursor: 'pointer' }}/>
                        </RadarChart>
                    </ResponsiveContainer>
                </div>
                {activeIndex && (
                    <div data-aos="fade-left">
                        <Label> {activeIndex} </Label>
                        <ResponsiveContainer height={300}>
                            <PieChart width={400} height={400}>
                                <Pie
                                    dataKey="value"
                                    isAnimationActive={true}
                                    data={pieChart}
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={80}
                                    fill="#8884d8"
                                    label={labelPie}
                                />
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                )}
            </Wrapper>
        </Container>
    );
}