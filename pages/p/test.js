import Head from 'next/head'
import Post from '../../layouts/post'

import markdown from 'markdown-in-js'


const Content = () => markdown`
# Title

## Subtitle

### Subsubtitle

#### Subsubsubtitle

Paragram with also
- One
- nice
- list

And a list:

* lol
* LOLOLOLOLOLOLOL
  * testing


\`\`\`
func test() -> String {
  return "hello"
}
\`\`\`

> just a little one




## HELP ME

> what about this shit?

[and a link](http://www.pointing.to/nowhere)

<SomethingElse />

*Thank you*
`

const TestingPost = () =>
  <Post>
    <Content />
  </Post>


const SomethingElse = () =>
  <div className='testing'>
    LOLOLOLOLOLOLOL
  </div>


export default TestingPost;
