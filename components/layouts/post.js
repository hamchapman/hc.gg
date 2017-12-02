import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';

import { Title } from '../index';
import Page from './page';

const OuterWrapper = glamorous('div')({
  overflowX: 'hidden',
});

const Post = (props) => {
  const { title, children } = props;
  return (
    <OuterWrapper>
      <Page documentTitle={`hc | ${title}`}>
        <Title>{title}</Title>
        {children}
      </Page>
    </OuterWrapper>
  );
};

Post.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired
};

export default Post;
