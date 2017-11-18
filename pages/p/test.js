import glamorous from 'glamorous';
import { rem } from 'polished';

import { Page, Link } from '../components';

const ComingSoon = glamorous('div')({
  position: 'absolute',
  left: '0',
  right: '0',
  padding: `${rem(20)} ${rem(10)} 0`,
  textAlign: 'center',
  fontSize: rem(3.2),
  fontWeight: '200',
});

export default () => (
  <Page>
    <ComingSoon>
      Coming soon. Check out my <Link href="/blog">blog</Link> for now.
    </ComingSoon>
  </Page>
)
