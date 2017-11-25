import glamorous from 'glamorous';
import { rem } from 'polished';

const Img = glamorous('img')({
  display: 'block',
  maxWidth: '100%',
  marginBottom: rem(24)
});

export default Img;
