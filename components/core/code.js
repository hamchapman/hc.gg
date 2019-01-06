import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { rem } from 'polished';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import paraisoDark from 'react-syntax-highlighter/dist/styles/hljs/paraiso-dark';

SyntaxHighlighter.registerLanguage('plaintext', () => ({}));
SyntaxHighlighter.registerLanguage(
  'bash',
  require('react-syntax-highlighter/dist/languages/hljs/bash').default,
);
SyntaxHighlighter.registerLanguage(
  'diff',
  require('react-syntax-highlighter/dist/languages/hljs/diff').default,
);
SyntaxHighlighter.registerLanguage(
  'go',
  require('react-syntax-highlighter/dist/languages/hljs/go').default,
);
SyntaxHighlighter.registerLanguage(
  'html',
  require('react-syntax-highlighter/dist/languages/hljs/xml').default,
);
SyntaxHighlighter.registerLanguage(
  'javascript',
  require('react-syntax-highlighter/dist/languages/hljs/javascript').default,
);
SyntaxHighlighter.registerLanguage(
  'ruby',
  require('react-syntax-highlighter/dist/languages/hljs/ruby').default,
);
SyntaxHighlighter.registerLanguage(
  'rust',
  require('react-syntax-highlighter/dist/languages/hljs/rust').default,
);
SyntaxHighlighter.registerLanguage(
  'swift',
  require('react-syntax-highlighter/dist/languages/hljs/swift').default,
);
SyntaxHighlighter.registerLanguage(
  'typescript',
  require('react-syntax-highlighter/dist/languages/hljs/typescript').default,
);

const FullWidtherOnHover = styled('div')({
  padding: `${rem(10)} 0`,
  display: 'inline-block',
  maxWidth: '100vw',
  '@media (max-width: 750px)': {
    width: '100%',
  },
});

const CodeStuffWrapper = styled('div')(
  {
    overflowX: 'scroll',
    minWidth: '750px',
    width: '750px',
    transition: 'width 0.3s, margin-left 0.3s',
    '@media (max-width: 750px)': {
      marginLeft: 0,
      width: 'inherit',
      minWidth: 'unset',
    },
  },
  props => {
    if (props.hover) {
      return {
        width: '100%',
        marginLeft: 'calc((100% - 750px) / -2)',
      };
    }
  },
);

const CodeHeader = styled('div')({
  color: 'inherit',
  zIndex: 1,
  marginLeft: '25px',
  position: 'absolute',
  marginTop: '-9px',
  backgroundColor: '#fff',
  padding: '0 8px',
  fontSize: rem(14),
});

const CodeHeading = props => {
  const { onDark, heading } = props;
  return <div>{heading && <CodeHeader>{heading}</CodeHeader>}</div>;
};

function CodePre(props) {
  const { onDark, children } = props;
  const extraStyles = {
    backgroundColor: onDark ? 'rgba(255,255,255,.03)' : '#FFFFFF',
    color: onDark ? '#FFFFFF' : '#2B303B',
  };
  return <StyledPre style={extraStyles}>{children}</StyledPre>;
}

const StyledPre = styled('pre')({
  padding: `${rem(12)} 0`,
  fontSize: rem(18),
  display: 'inline-flex',
  overflowX: 'unset',
  borderTop: '1px solid #eaeaea',
  borderBottom: '1px solid #eaeaea',
  minWidth: '750px',
  '@media (max-width: 750px)': {
    minWidth: '100%',
  },
});

// Shamelessly copied from hph: https://github.com/hph/www.hph.is/blob/3d2136e539a00abff6189125809396f14a6a8bfb/src/components/code.js#L50-L66
function trim(string) {
  let lines = string.split('\n');
  let minIndentation = Infinity;
  lines.forEach(line => {
    const index = line.search(/\S/);
    if (index > -1 && index < minIndentation) {
      minIndentation = index;
    }
  });
  if (lines[0].search(/\S/)) {
    lines = lines.slice(1);
  }
  if (lines[lines.length - 1].search(/\S/)) {
    lines = lines.slice(0, -1);
  }
  return lines.map(line => line.slice(minIndentation));
}

export const InlineCode = styled('code')(
  {
    fontFamily: '"Roboto Mono", monospace',
    borderRadius: 2,
  },
  props => {
    return {
      color: props.onDark ? '#FFFFFF' : '#2B303B',
    };
  },
);

export class Code extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: false,
    };
  }

  onMouseEnter = () => {
    this.setState({
      hovered: true,
    });
  };

  onMouseLeave = () => {
    this.setState({
      hovered: false,
    });
  };

  render() {
    const {
      language, children, onDark, heading, ...rest
    } = this.props;
    const { hovered } = this.state;
    const trimmedLines = trim(children).join('\n');
    const codeStyle = {
      style: {
        fontFamily: '"Roboto Mono", monospace',
      },
    };
    const lineNumContainerStyle = {
      float: 'left',
      paddingRight: '10px',
      width: '26px',
    };
    return (
      <FullWidtherOnHover
        hover={hovered}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
      >
        <CodeStuffWrapper hover={hovered}>
          <CodeHeading onDark={onDark} heading={heading} />
          <SyntaxHighlighter
            language={language}
            style={paraisoDark}
            showLineNumbers
            PreTag={CodePre}
            wrapLines
            codeTagProps={codeStyle}
            lineNumberContainerStyle={lineNumContainerStyle}
            lineNumberStyle={{
              fontFamily: '"Roboto Mono", monospace',
              color: onDark ? 'rgba(255,255,255,.5)' : 'rgba(0,0,0,.5)',
            }}
            {...rest}
            onDark={onDark}
          >
            {trimmedLines}
          </SyntaxHighlighter>
        </CodeStuffWrapper>
      </FullWidtherOnHover>
    );
  }
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
