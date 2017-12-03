import React from 'react';
import PropTypes from 'prop-types';
import NextLink from 'next/link';
import glamorous from 'glamorous';

const Anchor = glamorous('a')({
  textDecoration: 'none',
  color: 'inherit',
  borderBottom: '2px solid #dcdbdb',
  transition: 'color 0.3s ease',
  '&:hover': {
    color: '#aba9a9',
  },
});

function Link(props) {
  const { href, children, unstyled, external, ...rest } = props;
  if (external) {
    return (
      <NextLink href={href}>
        <Anchor href={href} unstyled={unstyled} target="_blank" rel="noopener noreferrer" {...rest}>
          {children}
        </Anchor>
      </NextLink>
    );
  }
  return (
    <NextLink href={href}>
      <Anchor href={href} unstyled={unstyled} {...rest}>
        {children}
      </Anchor>
    </NextLink>
  );
}

Link.propTypes = {
  children: PropTypes.node,
  external: PropTypes.bool,
  href: PropTypes.string,
  unstyled: PropTypes.bool,
};

Link.defaultProps = {
  external: false,
};

export default Link;
