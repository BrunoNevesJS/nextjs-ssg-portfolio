import styled from 'styled-components';

export const Container = styled.section`
  height: 100%;
  width: 100%;
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;
  > img {
    width: 40rem;
    flex: 1;
  }
  > div {
    flex: 4;
  }
  @media (max-width: 1450px) {
    > img {
      width: 30rem;
    }
    > div {
      flex: 1;
    }
  }
  @media (max-width: 1000px) {
    > img {
      width: 22rem;
    }
  }
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

export const TextItem = styled.pre`
  align-self: flex-start;
  @media (max-width: 1000px) {
    width: auto;
  }
  &:last-child {
    align-self: center;
  }
  span.highlight {
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 1rem;
    display: block;
  }
`;

export const TextContainer = styled.section`
  margin-bottom: 2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  h1 {
    font-size: 8rem;
    color: ${({ theme }) => theme.colors.primary};
    > span {
      color: white;
    }
  }
  h2 {
    font-size: 3rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.text};
  }
  @media (max-width: 1450px) {
    h1 {
      font-size: 5rem;
    }
    h2 {
      font-size: 2rem;
    }
  }
  @media (max-width: 1000px) {
    h1 {
      font-size: 3rem;
    }
    h2 {
      font-size: 1.5rem;
    }
  }
`;

export const InfosContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const CodeItem = styled.pre`
  font-family: 'JetBrains Mono', monospace;
  font-weight: 300;
  color: #fff;
  width: 24rem;
  align-self: flex-start;
  transition: 1s !important;
  @media (max-width: 1000px) {
    width: auto;
  }
  &:hover {
    filter: brightness(1.2);
  }
  &:last-child {
    align-self: flex-end;
  }
  > div {
    margin: 0.2rem 0;
    margin-left: 1rem;
  }
  > div div {
    margin: 0.2rem 0;
    margin-left: 1rem;
  }
  span.purple {
    color: #c38cdd;
  }
  span.blue {
    color: #7ac7e3;
  }
  span.comment {
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 1rem;
    display: block;
  }
`;
