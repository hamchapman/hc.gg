import React from 'react';
import PropTypes from 'prop-types';

import { Title } from '../index';
import Page from './page';

const Post = (props) => {
  const { title, children } = props;
  return (
    <Page documentTitle={`hc | ${title}`}>
      <Title>{title}</Title>
      {children}
    </Page>
  );
};

Post.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired
};

export default Post;
