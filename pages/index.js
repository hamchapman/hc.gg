import React from 'react';
import styled from '@emotion/styled';
import { rem } from 'polished';

import { Page, Link } from '../components';

const ComingSoon = styled('div')({
  position: 'absolute',
  left: '0',
  right: '0',
  padding: `${rem(20)} ${rem(10)} 0`,
  textAlign: 'center',
  fontSize: rem(32),
  fontWeight: '200',
});

export default () => (
  <Page>
    <ComingSoon>
      Coming soon. Check out my
      {' '}
      <Link href="/blog">blog</Link>
      {' '}
for now.
    </ComingSoon>
  </Page>
);
