import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { rem, rgba } from 'polished';

import {
  Page, Link, Ul, Li
} from '../components';
import { posts } from '../posts';

const PostList = styled(Ul)({
  padding: 0,
  margin: 0,
  display: 'block',
});

const PostItem = styled(Li)({
  overflow: 'hidden',
  listStyle: 'none',
  padding: '12px 10px 24px',
  borderBottom: '1px solid #EBEBEB',
  marginBottom: 0,
  textDecoration: 'none',
  '&:hover': {
    cursor: 'pointer',
    backgroundColor: rgba(242, 108, 126, 0.1),
  },
});

const PostTitleWrapper = styled('div')({
  float: 'left',
  width: 'calc(100% - 142px)',
  lineHeight: '1.3',
  '@media (max-width: 500px)': {
    width: '100%',
    float: 'none',
    textAlign: 'left',
  },
});

const PostTitle = styled('div')({
  fontSize: rem(22),
  marginBottom: '6px',
});

const PostSubtitle = styled('div')({
  color: rgba(173, 180, 181, 0.6),
  fontSize: rem(16),
});

const PostDate = styled('div')({
  width: '142px',
  textAlign: 'right',
  color: '#999',
  float: 'right',
  paddingTop: '20px',
  '@media (max-width: 500px)': {
    width: '100%',
    float: 'none',
    textAlign: 'left',
    marginTop: '12px',
    paddingTop: 0,
  },
});

const PostLink = ({
  id, date, title, subtitle
}) => (
  <Link href={`/p/${id}`}>
    <PostItem>
      <PostTitleWrapper>
        <PostTitle>
          <span>{title}</span>
        </PostTitle>
        <PostSubtitle>
          <span>{subtitle}</span>
        </PostSubtitle>
      </PostTitleWrapper>

      <PostDate>{date}</PostDate>
    </PostItem>
  </Link>
);

const ComingSoon = styled('div')({
  position: 'absolute',
  left: '0',
  right: '0',
  padding: `${rem(20)} ${rem(10)} 0`,
  textAlign: 'center',
  fontSize: rem(32),
  fontWeight: '200',
});

const Blog = () => {
  const anyPosts = posts.length > 0;

  return (
    <Page>
      {anyPosts && (
        <PostList>
          {posts.map(({
            id, date, title, subtitle
          }) => (
            <PostLink id={id} key={id} date={date} title={title} subtitle={subtitle} />
          ))}
        </PostList>
      )}
      {!anyPosts && <ComingSoon>Coming soon!</ComingSoon>}
    </Page>
  );
};

PostLink.propTypes = {
  id: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Blog;
