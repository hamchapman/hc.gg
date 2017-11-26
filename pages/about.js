import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import { rem } from 'polished';

import { Page, Link, Img } from '../components';

const Ham = glamorous(Img)({
  textAlign: 'center',
  borderRadius: '50%',
  height: '200px',
  width: '200px',
  margin: '40px auto',
  '@media (max-width: 600px)': {
    margin: '20px auto'
  }
});

const Spiel = glamorous('div')({
  fontSize: rem(50),
  fontWeight: 100,
  lineHeight: 1.4,
  position: 'absolute',
  margin: '0 auto',
  left: '0',
  right: '0',
  width: '80%',
  padding: '0 0 30px',
  '@media (max-width: 600px)': {
    fontSize: rem(40),
    width: '95%',
    margin: '0 auto'
  }
});

const Wrapper = glamorous('div')({
  textAlign: 'center',
  zIndex: -1
});

const ExternalLink = props => (
  <Link external {...props}>
    {props.children}
  </Link>
);

ExternalLink.propTypes = {
  children: PropTypes.node
};

const ColouredLink = glamorous(ExternalLink)({
  paddingBottom: '2px',
  borderBottom: '3px solid #fff',
  transition: 'border-bottom-color .2s ease'
});

const EmailLink = glamorous(ColouredLink)({
  color: '#ffaa1f',
  '&:hover': {
    borderBottomColor: '#ffaa1f'
  }
});

const GitHubLink = glamorous(ColouredLink)({
  color: '#28a745',
  '&:hover': {
    borderBottomColor: '#28a745'
  }
});

const BlogLink = glamorous(ColouredLink)({
  color: '#e73a29',
  '&:hover': {
    borderBottomColor: '#e73a29'
  }
});

const TwitterLink = glamorous(ColouredLink)({
  color: '#1da1f2',
  '&:hover': {
    borderBottomColor: '#1da1f2'
  }
});

const PusherLink = glamorous(ColouredLink)({
  color: '#f32cff',
  '&:hover': {
    borderBottomColor: '#f32cff'
  }
});

export default () => (
  <Page>
    <Wrapper>
      <Ham src="/static/img/ham.jpg" />

      <Spiel>
        I’m Hamilton. I build things at{' '}
        <PusherLink href="https://pusher.com">Pusher</PusherLink>. Follow me on{' '}
        <TwitterLink href="https://twitter.com/hamchapman">Twitter</TwitterLink>,
        check out my <BlogLink href="/blog">blog</BlogLink>, see my code on{' '}
        <GitHubLink href="https://github.com/hamchapman">GitHub</GitHubLink> or{' '}
        <EmailLink href="mailto:hamchapman@gmail.com">email</EmailLink> me.
      </Spiel>
    </Wrapper>
  </Page>
);
