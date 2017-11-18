import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import { rem } from 'polished';
import SyntaxHighlighter, { registerLanguage } from 'react-syntax-highlighter/dist/light';
import paraisoDark from 'react-syntax-highlighter/dist/styles/paraiso-dark';

import { Aux } from '../index';

registerLanguage('plaintext', () => ({}));
registerLanguage('bash', require('react-syntax-highlighter/dist/languages/bash').default);
registerLanguage('diff', require('react-syntax-highlighter/dist/languages/diff').default);
registerLanguage('go', require('react-syntax-highlighter/dist/languages/go').default);
registerLanguage('html', require('react-syntax-highlighter/dist/languages/xml').default);
registerLanguage(
  'javascript',
  require('react-syntax-highlighter/dist/languages/javascript').default,
);
registerLanguage('ruby', require('react-syntax-highlighter/dist/languages/ruby').default);
registerLanguage('rust', require('react-syntax-highlighter/dist/languages/rust').default);
registerLanguage('swift', require('react-syntax-highlighter/dist/languages/swift').default);
registerLanguage(
  'typescript',
  require('react-syntax-highlighter/dist/languages/typescript').default,
);

const CodeHeading = glamorous('h4')(
  {
    fontSize: rem(16),
    fontWeight: 500,
    marginBottom: rem(12),
    'pre + &': {
      paddingTop: rem(24),
    },
  },
  props => {
    return {
      color: props.onDark ? '#FFFFFF' : '#2B303B',
    };
  },
);

export const InlineCode = glamorous('code')(
  {
    fontFamily: '"Roboto Mono", monospace',
    fontSize: rem(12),
    padding: `${rem(2)} ${rem(6)}`,
    borderRadius: 2,
  },
  props => {
    return {
      backgroundColor: props.onDark ? 'rgba(255,255,255,.03)' : '#EFF4F7',
      color: props.onDark ? '#FFFFFF' : '#2B303B',
    };
  },
);

export function Code(props) {
  const { language, children, onDark, heading, ...rest } = props;
  const style = {
    backgroundColor: onDark ? 'rgba(255,255,255,.03)' : '#F7F9FA',
    color: onDark ? '#FFFFFF' : '#2B303B',
    marginBottom: rem(24),
    padding: rem(18),
    fontSize: rem(14),
  };
  const codeStyle = {
    style: {
      fontFamily: '"Roboto Mono", monospace',
    },
  };
  return (
    <Aux>
      {heading && <CodeHeading onDark={onDark}>{heading}</CodeHeading>}
      <SyntaxHighlighter
        language={language}
        style={paraisoDark}
        showLineNumbers
        customStyle={style}
        codeTagProps={codeStyle}
        lineNumberStyle={{
          fontFamily: '"Roboto Mono", monospace',
          color: onDark ? 'rgba(255,255,255,.5)' : 'rgba(0,0,0,.5)',
        }}
        {...rest}
      >
        {children}
      </SyntaxHighlighter>
    </Aux>
  );
}

Code.propTypes = {
  language: PropTypes.oneOf([
    'plaintext',
    'bash',
    'diff',
    'go',
    'html',
    'javascript',
    'swift',
    'ruby',
    'rust',
    'typescript',
  ]).isRequired,
  children: PropTypes.node,
  onDark: PropTypes.bool,
  heading: PropTypes.string,
};
