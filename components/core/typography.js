import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { rem } from 'polished';

export const Text = styled.p({
  lineHeight: 1.5,
  color: '#4B4F58',
  margin: `${rem(10)} 0`,
  display: 'inline-block',
});

export const Title = styled.h1({
  fontWeight: 600,
  color: '#2B303B',
  margin: `${rem(12)} 0 ${rem(24)}`,
  textAlign: 'center',
  fontSize: rem(32),
});

export const H2 = styled('h2')({
  fontWeight: 500,
  color: '#2B303B',
  margin: `${rem(10)} 0`,
  '& a': {
    color: '#006EFF',
    textDecoration: 'none',
    opacity: 0,
    transition: 'opacity .2s ease',
  },
  '&:hover a': {
    opacity: 1,
  },
});

export function Heading(props) {
  const { children } = props;
  const slug = children
    .trim()
    .replace(/[^a-z0-9]+/gi, '-')
    .toLowerCase();
  return (
    <H2 id={slug}>
      {children}
      {' '}
      <a href={`#${slug}`}>#</a>
    </H2>
  );
}

export const H3 = styled('h3')({
  fontWeight: 500,
  color: '#2B303B',
  margin: `${rem(10)} 0`,
  '& a': {
    color: '#006EFF',
    textDecoration: 'none',
    opacity: 0,
    transition: 'opacity .2s ease',
  },
  '&:hover a': {
    opacity: 1,
  },
});

export function SubHeading(props) {
  const { children } = props;
  const slug = children
    .trim()
    .replace(/[^a-z0-9]+/gi, '-')
    .toLowerCase();
  return (
    <H3 id={slug}>
      {children}
      {' '}
      <a href={`#${slug}`}>#</a>
    </H3>
  );
}

export const H4 = styled('h4')({
  fontWeight: 500,
  margin: `${rem(10)} 0`,
});

export const Ul = styled('ul')({
  paddingLeft: rem(16),
  margin: `${rem(10)} 0`,
  display: 'inline-block',
});

export const Ol = styled('ol')({
  paddingLeft: rem(16),
  margin: `${rem(10)} 0`,
  display: 'inline-block',
});

export const Li = styled('li')({
  lineHeight: 1.6,
  color: '#4B4F58',
  marginBottom: rem(12),
  '& ul': {
    marginTop: rem(12),
  },
});

export const Bold = styled('strong')({
  fontWeight: 500,
});

export const Italic = styled('em')({
  fontStyle: 'italic',
});

export const Divider = styled('hr')({
  width: '100%',
  border: 'none',
  borderTop: '2px solid #EFF4F7',
  margin: `${rem(48)} auto`,
});

export const Blockquote = styled('blockquote')({
  paddingLeft: rem(8),
  borderLeft: '3px solid #eee',
  margin: `${rem(6)} 0`,
});

Heading.propTypes = {
  children: PropTypes.node,
};

SubHeading.propTypes = {
  children: PropTypes.node,
};
