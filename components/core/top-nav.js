import React from 'react';
import glamorous from 'glamorous';
import { rem, rgba } from 'polished';
import PropTypes from 'prop-types';

const options = {
  propsAreCssOverrides: true,
};

const gutterStyles = props => {
  const cssRule = {
    column: 'marginBottom',
    row: 'marginRight',
  }[props.flexDirection];
  return {
    '> :not(:last-child)': {
      [cssRule]: rem(props.gutter || 0),
    },
  };
};

const Flex = glamorous('div', {
  ...options,
  filterProps: ['gutter'],
})(
  {
    display: 'flex',
  },
  gutterStyles,
);

Flex.defaultProps = {
  flexDirection: 'row',
};

Flex.propTypes = {
  gutter: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

const Container = glamorous(Flex)({
  position: 'relative',
  height: rem(63),
});

const NavigationContainer = glamorous(Flex)({
  flex: 1,
  alignItems: 'center',
  justifyContent: 'space-between',
  height: rem(63),
  borderBottom: '1px solid #eaeaea',
});

const NavigationList = glamorous('ul')({
  margin: '0 auto',
  padding: 0,
  listStyle: 'none',
  display: 'flex',
  '& li': {
    margin: `0 ${rem(12)}`,
  },
});

const Anchor = glamorous('a')({
  textDecoration: 'none',
  color: 'inherit',
  transition: 'color .2s ease',
  '&:hover': {
    color: rgba(242, 108, 126, 0.7),
  },
});

const TopNav = () => (
  <Container>
    <NavigationContainer>
      <NavigationList>
        <li>
          <Anchor href="/">hc.gg</Anchor>
        </li>

        <li>
          <Anchor href="/blog">Blog</Anchor>
        </li>

        <li>
          <Anchor href="/about">About</Anchor>
        </li>
      </NavigationList>
    </NavigationContainer>
  </Container>
);

export default TopNav;
