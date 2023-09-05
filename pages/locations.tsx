import type { ReactElement } from 'react'
import React from 'react'

import Index from '../components/layout'
import Post from '../components/posts/post'
import { postConfig } from '../confict/post'

const Page = () => {
  return (
    <div className="">
      {postConfig.map((post, key) => (
        <div key={key}>
          <Post post={post} />
        </div>
      ))}
    </div>
  )
}

Page.getLayout = function getLayout(page: ReactElement) {
  return <Index>{page}</Index>
}

export default Page
