import styled from '@emotion/styled';
import { width } from 'styled-system';

export const Row = styled('div')({
  display: 'flex',
  flexWrap: 'wrap',
  marginLeft: -24,
});

export const Col = styled('div')(
  {
    paddingLeft: 24,
    boxSizing: 'border-box',
  },
  width,
);
