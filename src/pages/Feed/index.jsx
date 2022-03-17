import React from "react"
import Post from 'src/components/Post'
import SuggegtionPanel from 'src/components/SuggegtionPanel'

import { articles } from 'src/pages/Feed/data'

export default function Feed() {
  return <div className="feed-content">
      <Post articles={articles} />
      <SuggegtionPanel />
  </div>
}
