import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { hydrate } from 'emotion';
import { ThemeProvider } from 'emotion-theming';
import { rem } from 'polished';

import { TopNav, Aux, Head } from '../index';
import * as theme from '../ui/theme';

// '__NEXT_DATA__.ids' is set in '_document.js'
if (typeof window !== 'undefined') {
  hydrate(window.__NEXT_DATA__.ids); // eslint-disable-line no-underscore-dangle
}

const Container = styled('section')({
  maxWidth: '750px',
  margin: 'auto',
  left: '0',
  right: '0',
  fontSize: '1.1rem',
  color: 'rgba(90, 90, 90, 1)',
  '@media (max-width: 750px)': {
    padding: '0 12px',
    overflowX: 'hidden',
  },
});

const Content = styled('div')({
  paddingBottom: '500px',
});

const Page = props => {
  const { children, documentTitle, background } = props;
  return (
    <ThemeProvider theme={theme}>
      <Aux>
        <Head title={documentTitle} />
        <Container>
          <TopNav />
          <Content>{children}</Content>
        </Container>
      </Aux>
    </ThemeProvider>
  );
};

Page.propTypes = {
  children: PropTypes.node,
  background: PropTypes.string,
  documentTitle: PropTypes.string,
};

export default Page;
