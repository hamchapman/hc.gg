import React from 'react';
import glamorous from 'glamorous';
import { rem } from 'polished';
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
  paddingRight: rem(24),
  height: rem(63),
});

const NavigationContainer = glamorous(Flex)({
  flex: 1,
  alignItems: 'center',
  justifyContent: 'space-between',
  height: rem(63),
  '@media (max-width: 52rem)': {
    display: 'none',
  },
});

const NavigationList = glamorous('ul')({
  marginLeft: 'auto',
  marginRight: 'auto',
  padding: 0,
  listStyle: 'none',
  display: 'flex',
  '& li': {
    marginLeft: rem(24),
  },
});

// TODO: improve Link component to use here

const Anchor = glamorous('a')({
  textDecoration: 'none',
  color: 'inherit',
  transition: 'color .2s ease',
  '&:hover': {
    color: '#006EFF',
  },
});


const TopNav = () => (
  <Container>
    <NavigationContainer>
      <NavigationList>
        <li>
          <Anchor href="/">
            hc.gg
          </Anchor>
        </li>

        <li>
          <Anchor href="/blog">
            Blog
          </Anchor>
        </li>

        <li>
          <Anchor href="/about">
            About
          </Anchor>
        </li>
      </NavigationList>
    </NavigationContainer>
  </Container>
);

export default TopNav;
