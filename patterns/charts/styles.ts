import styled, { css, keyframes } from 'styled-components';

export const Container = styled.section`
  display: contents;
  background-color: white;
  display: flex;
  width: 100%;
  padding-bottom: 100px;
`;

export const Label = styled.h1`
  color: ${({ theme }) => theme.colors.secondary};
`

export const Wrapper = styled.div<{ activeIndex?: boolean }>`
    width: 100%;
    display: flex;
    overflow: hidden;

    > div {
      width: ${(props) =>
        props.activeIndex && '50%' || '100%'
      };
      text-align: center;
    }

    @media (max-width: 800px) {
      display: grid;
      justify-items: center;

      > div {
        height: 35%;
        text-align: center;
      }
    }
`;