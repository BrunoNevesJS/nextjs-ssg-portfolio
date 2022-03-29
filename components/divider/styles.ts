import styled from 'styled-components';

export const Wrapper = styled.div`
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;

  > svg {
    position: relative;
    display: block;
    width: calc(117% + 1.3px);
    height: 147px
  }

  .shape-fill {
    fill: #FFFFFF;
  }
`;