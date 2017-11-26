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

const FullWidther = glamorous('div')({
  width: '100vw',
  marginLeft: 'calc((100vw - 100%) / -2)',
})

const FullWidtherOnHover = (props) => {
  const { hover, children } = props;
  if (hover) {
    return <FullWidther>{children}</FullWidther>
  }
  return <div>{children}</div>
};

const BetteMidler = glamorous('div')({
  textAlign: 'center',
});

const CodeBorder = glamorous('div')(
  {
    width: '100%',
    position: 'relative',
  },
  props => {
    return {
      borderBottom: props.onDark ? '1px solid #454545' : '1px solid #eaeaea',
      color: props.onDark ? '#454545' : '#ABABAB',
    };
  }
);

const CodeBorderTop = glamorous(CodeBorder)({
  margin: '24px 0 4px',
})

const CodeBorderBottom = glamorous(CodeBorder)({
  margin: '4px 0 24px',
})

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
    <CodeBorderTop onDark={onDark}>
      {heading && <CodeHeader>{heading}</CodeHeader>}
    </CodeBorderTop>
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
  }

  render() {
    const { language, children, onDark, heading, ...rest } = this.props;
    const style = {
      backgroundColor: onDark ? 'rgba(255,255,255,.03)' : '#FFFFFF',
      color: onDark ? '#FFFFFF' : '#2B303B',
      padding: `${rem(12)} 0`,
      fontSize: rem(18),
      textAlign: 'left',
      // display: 'inline-block',
    };
    const codeStyle = {
      style: {
        fontFamily: '"Roboto Mono", monospace',
        // float: 'left',
      }
    };
    return (
      <FullWidtherOnHover>
        <BetteMidler>
          <CodeHeading onDark={onDark} heading={heading} />
          <SyntaxHighlighter
            language={language}
            style={paraisoDark}
            showLineNumbers
            customStyle={style}
            codeTagProps={codeStyle}
            lineNumberStyle={{
              fontFamily: '"Roboto Mono", monospace',
              color: onDark ? 'rgba(255,255,255,.5)' : 'rgba(0,0,0,.5)'
            }}
            {...rest}
          >
            {children}
          </SyntaxHighlighter>
          <CodeBorderBottom />
        </BetteMidler>
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
