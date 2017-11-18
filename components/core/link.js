import React from 'react';
import PropTypes from 'prop-types';
import NextLink from 'next/link';
import glamorous from 'glamorous';

const Anchor = glamorous('a')(
  {
    textDecoration: 'none',
    color: 'inherit',
  },
  props => {
    if (!props.unstyled) {
      return {
        color: '#006EFF',
        '&:hover': {
          textDecoration: 'underline',
        },
      };
    }
  },
);

function Link(props) {
  const { href, children, unstyled, ...rest } = props;
  return (
    <NextLink href={href}>
      <Anchor href={href} unstyled={unstyled} {...rest}>
        {children}
      </Anchor>
    </NextLink>
  );
}

Link.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node,
  unstyled: PropTypes.bool,
};

export default Link;
