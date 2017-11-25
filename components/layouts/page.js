import React from 'react';
import PropTypes from 'prop-types';
import { rehydrate } from 'glamor';
import glamorous, { ThemeProvider } from 'glamorous';
import { rem } from 'polished';

import { TopNav, Aux, Head } from '../index';
import * as theme from '../ui/theme';

// Adds server generated styles to glamor cache.
// Has to run before any `style()` calls
// '__NEXT_DATA__.ids' is set in '_document.js'
if (typeof window !== 'undefined') {
  rehydrate(window.__NEXT_DATA__.ids); // eslint-disable-line no-underscore-dangle
}

const Container = glamorous('div')({
  maxWidth: '750px',
  margin: 'auto',
  left: '0',
  right: '0',
  fontSize: '1.1rem',
  color: 'rgba(90, 90, 90, 1)'
});

const Main = glamorous('div')({
  '@media (min-width: 52rem)': {
    display: 'flex'
  }
});

const Content = glamorous('div')({
  '@media (min-width: 52rem)': {
    flex: 1,
    height: `calc(100vh - ${rem(63)})`,
    overflowY: 'auto'
  }
});

const Page = props => {
  const { children, documentTitle, background } = props;
  return (
    <ThemeProvider theme={theme}>
      <Aux>
        <Head>
          <style>{`
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            html,
            body {
              color: #2B303B;
              font-size: 16px;
              font-family: Roboto, sans-serif;
              text-rendering: optimizeLegibility;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
            }
            html {
              height: 100%;
            }
            body {
              height: 100%;
              background-color: ${background || '#FFFFFF'};
            }
          `}</style>
        </Head>
        <Container>
          <TopNav />
          <Main>
            <Content>{children}</Content>
          </Main>
        </Container>
      </Aux>
    </ThemeProvider>
  );
};

Page.propTypes = {
  children: PropTypes.node,
  background: PropTypes.string,
  documentTitle: PropTypes.string
};

export default Page;
