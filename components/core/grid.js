import glamorous from 'glamorous';
import { width } from 'styled-system';

export const Row = glamorous('div')({
  display: 'flex',
  flexWrap: 'wrap',
  marginLeft: -24
});

export const Col = glamorous('div')(
  {
    paddingLeft: 24,
    boxSizing: 'border-box'
  },
  width
);
