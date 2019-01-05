import React from 'react';
import styled from '@emotion/styled';
import { rem, rgba } from 'polished';
import PropTypes from 'prop-types';

import Link from './link';

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

const Flex = styled('div', {
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

const Container = styled(Flex)({
  position: 'relative',
  height: rem(63),
});

const NavigationContainer = styled(Flex)({
  flex: 1,
  alignItems: 'center',
  justifyContent: 'space-between',
  height: rem(63),
  borderBottom: '1px solid #eaeaea',
});

const NavigationList = styled('ul')({
  margin: '0 auto',
  padding: 0,
  listStyle: 'none',
  display: 'flex',
  '& li': {
    margin: `0 ${rem(12)}`,
  },
});

const NavLink = styled(Link)({
  borderBottom: 'none',
  '&:hover': {
    color: rgba(242, 108, 126, 0.7),
  },
});

const TopNav = () => (
  <Container>
    <NavigationContainer>
      <NavigationList>
        <li>
          <NavLink href="/">hc.gg</NavLink>
        </li>

        <li>
          <NavLink href="/blog">Blog</NavLink>
        </li>

        <li>
          <NavLink href="/about">About</NavLink>
        </li>
      </NavigationList>
    </NavigationContainer>
  </Container>
);

export default TopNav;
