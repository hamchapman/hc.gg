import React, { Component } from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import { rem } from 'polished';
import SyntaxHighlighter, { registerLanguage } from 'react-syntax-highlighter/light';
import paraisoDark from 'react-syntax-highlighter/styles/hljs/paraiso-dark';

registerLanguage('plaintext', () => ({}));
registerLanguage('bash', require('react-syntax-highlighter/languages/hljs/bash').default);
registerLanguage('diff', require('react-syntax-highlighter/languages/hljs/diff').default);
registerLanguage('go', require('react-syntax-highlighter/languages/hljs/go').default);
registerLanguage('html', require('react-syntax-highlighter/languages/hljs/xml').default);
registerLanguage(
  'javascript',
  require('react-syntax-highlighter/languages/hljs/javascript').default,
);
registerLanguage('ruby', require('react-syntax-highlighter/languages/hljs/ruby').default);
registerLanguage('rust', require('react-syntax-highlighter/languages/hljs/rust').default);
registerLanguage('swift', require('react-syntax-highlighter/languages/hljs/swift').default);
registerLanguage(
  'typescript',
  require('react-syntax-highlighter/languages/hljs/typescript').default,
);

const FullWidtherOnHover = glamorous('div')({
  padding: `${rem(10)} 0`,
  display: 'inline-block',
  maxWidth: '100vw',
  '@media (max-width: 750px)': {
    width: '100%',
  },
});

const CodeStuffWrapper = glamorous('div')(
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

const CodeHeader = glamorous('div')({
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
  }
  return (
    <StyledPre style={extraStyles}>
      {children}
    </StyledPre>
  );
}

const StyledPre = glamorous('pre')({
  padding: `${rem(12)} 0`,
  fontSize: rem(18),
  display: 'inline-flex',
  overflowX: 'unset',
  borderTop: '1px solid #eaeaea',
  borderBottom: '1px solid #eaeaea',
  minWidth: '750px',
  '@media (max-width: 750px)': {
    minWidth: 'unset',
  },
})

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

export const InlineCode = glamorous('code')(
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
    const { language, children, onDark, heading, ...rest } = this.props;
    const { hovered } = this.state;
    const trimmedLines = trim(children).join("\n");
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
