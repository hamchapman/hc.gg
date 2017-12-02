import React, { Component } from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import { rem } from 'polished';
import SyntaxHighlighter, {
  registerLanguage
} from 'react-syntax-highlighter/dist/light';
import paraisoDark from 'react-syntax-highlighter/dist/styles/paraiso-dark';

registerLanguage('plaintext', () => ({}));
registerLanguage(
  'bash',
  require('react-syntax-highlighter/dist/languages/bash').default
);
registerLanguage(
  'diff',
  require('react-syntax-highlighter/dist/languages/diff').default
);
registerLanguage(
  'go',
  require('react-syntax-highlighter/dist/languages/go').default
);
registerLanguage(
  'html',
  require('react-syntax-highlighter/dist/languages/xml').default
);
registerLanguage(
  'javascript',
  require('react-syntax-highlighter/dist/languages/javascript').default
);
registerLanguage(
  'ruby',
  require('react-syntax-highlighter/dist/languages/ruby').default
);
registerLanguage(
  'rust',
  require('react-syntax-highlighter/dist/languages/rust').default
);
registerLanguage(
  'swift',
  require('react-syntax-highlighter/dist/languages/swift').default
);
registerLanguage(
  'typescript',
  require('react-syntax-highlighter/dist/languages/typescript').default
);

const FullWidtherOnHover = glamorous('div')({
  display: 'inline-block',
  maxWidth: '100vw',
  '@media (max-width: 750px)': {
    width: '100%',
  }
});

const CodeStuffWrapper = glamorous('div')(
  {
    borderTop: '1px solid #eaeaea',
    borderBottom: '1px solid #eaeaea',
    overflowX: 'scroll',
    minWidth: '750px',
    width: '750px',
    transition: 'width 0.3s, margin-left 0.3s',
    '@media (max-width: 750px)': {
      marginLeft: 0,
      width: 'inherit',
      minWidth: 'unset',
    }
  },
  props => {
    if (props.hover) {
      return {
        width: '100%',
        marginLeft: 'calc((100% - 750px) / -2)',
      }
    }
  }
)

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

const CodeHeading = (props) => {
  const { onDark, heading } = props;
  return (
    <div>
      {heading && <CodeHeader>{heading}</CodeHeader>}
    </div>
  );
}

export const InlineCode = glamorous('code')(
  {
    fontFamily: '"Roboto Mono", monospace',
    borderRadius: 2
  },
  props => {
    return {
      color: props.onDark ? '#FFFFFF' : '#2B303B'
    };
  }
);

export class Code extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: false,
    }
  }

  onMouseEnter = () => {
    this.setState({
      hovered: true,
    })
  }

  onMouseLeave = () => {
    this.setState({
      hovered: false,
    })
  }

  render() {
    const { language, children, onDark, heading, ...rest } = this.props;
    const { hovered } = this.state;
    const style = {
      backgroundColor: onDark ? 'rgba(255,255,255,.03)' : '#FFFFFF',
      color: onDark ? '#FFFFFF' : '#2B303B',
      padding: `${rem(12)} 0`,
      fontSize: rem(18),
      display: 'inline-block',
      overflowX: 'unset',
    };
    const codeStyle = {
      style: {
        fontFamily: '"Roboto Mono", monospace',
        display: 'inline-block',
      }
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
            customStyle={style}
            codeTagProps={codeStyle}
            lineNumberContainerStyle={{
              float: 'unset',
              display: 'inline-block',
              paddingRight: '10px',
            }}
            lineNumberStyle={{
              fontFamily: '"Roboto Mono", monospace',
              color: onDark ? 'rgba(255,255,255,.5)' : 'rgba(0,0,0,.5)',
            }}
            {...rest}
          >
            {children}
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
    'typescript'
  ]).isRequired,
  children: PropTypes.node,
  onDark: PropTypes.bool,
  heading: PropTypes.string
};
