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


\`\`\`swift
func testing() -> String {
  return "hello"
}
\`\`\`

> just a little one


> just a little one just a little one just a little one just a little one just a little one just a little one just a little one just a little one just a little one just a little one just a little one


----

## HELP ME

> what about this shit?

of some text there's something [and a link](http://www.pointing.to/nowhere) in the middle of some other text that hopefully goes on to multiple lines

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
