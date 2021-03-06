import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { rem } from 'polished';

import { Page, Link, Img } from '../components';

const Ham = styled(Img)({
  textAlign: 'center',
  borderRadius: '50%',
  height: '200px',
  width: '200px',
  margin: '40px auto',
  '@media (max-width: 600px)': {
    margin: '20px auto',
  },
});

const Spiel = styled('div')({
  fontSize: rem(48),
  fontWeight: 200,
  lineHeight: 1.3,
  position: 'absolute',
  margin: '0 auto',
  left: '0',
  right: '0',
  width: '80%',
  padding: '0 0 30px',
  '@media (max-width: 600px)': {
    fontSize: rem(40),
    width: '95%',
    margin: '0 auto',
  },
});

const Wrapper = styled('div')({
  textAlign: 'center',
  zIndex: -1,
});

const ExternalLink = props => (
  <Link external {...props}>
    {props.children}
  </Link>
);

ExternalLink.propTypes = {
  children: PropTypes.node,
};

const ColouredLink = styled(ExternalLink)({
  paddingBottom: '0',
  borderBottom: '3px solid #fff',
  transition: 'border-bottom-color .2s ease, padding-bottom .2s ease',
  '&:hover': {
    color: 'inherit',
    paddingBottom: '2px',
  },
});

const SwiftLink = styled(ColouredLink)({
  color: '#f16931',
  '&:hover': {
    borderBottomColor: '#f16931',
  },
});

const LostLink = styled(ColouredLink)({
  color: '#52bed2',
  '&:hover': {
    borderBottomColor: '#52bed2',
  },
});

const EmailLink = styled(ColouredLink)({
  color: '#ffaa1f',
  '&:hover': {
    borderBottomColor: '#ffaa1f',
  },
});

const GitHubLink = styled(ColouredLink)({
  color: '#28a745',
  '&:hover': {
    borderBottomColor: '#28a745',
  },
});

const BlogLink = styled(ColouredLink)({
  color: '#e73a29',
  '&:hover': {
    borderBottomColor: '#e73a29',
  },
});

const TwitterLink = styled(ColouredLink)({
  color: '#1da1f2',
  '&:hover': {
    borderBottomColor: '#1da1f2',
  },
});

const PusherLink = styled(ColouredLink)({
  color: '#f32cff',
  '&:hover': {
    borderBottomColor: '#f32cff',
  },
});

export default () => (
  <Page>
    <Wrapper>
      <Ham src="/static/img/ham.jpg" />

      <Spiel>
        I’m Hamilton. I build things at
        {' '}
        <PusherLink href="https://pusher.com">Pusher</PusherLink>
. I
        thought the ending of
        {' '}
        <LostLink href="http://www.imdb.com/title/tt0411008/">Lost</LostLink>
        {' '}
        was good.
        {' '}
        <SwiftLink href="https://developer.apple.com/swift/">Swift</SwiftLink>
        {' '}
is the
        future. Follow me on
        {' '}
        <TwitterLink href="https://twitter.com/hamchapman">Twitter</TwitterLink>
, check out my
        {' '}
        <BlogLink href="/blog">blog</BlogLink>
, see my code on
        {' '}
        <GitHubLink href="https://github.com/hamchapman">GitHub</GitHubLink>
, or
        {' '}
        <EmailLink href="mailto:hamchapman@gmail.com">email</EmailLink>
        {' '}
me.
      </Spiel>
    </Wrapper>
  </Page>
);
